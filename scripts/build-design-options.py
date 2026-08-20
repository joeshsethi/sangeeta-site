#!/usr/bin/env python3
"""Bundle public/design/mockups/*.html into one self-contained switcher page."""
import base64, json, re, os, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public/images")
MOCK_DIR = os.path.join(ROOT, "public/design/mockups")
OUT = os.path.join(ROOT, "public/design/Sangeeta-design-options.html")

DESC = {
  "1-editorial": "Magazine masthead, hairline rules, numbered index. Warm paper, Bodoni.",
  "2-literary": "Centered, bookish, Garamond. Cream.",
  "3-card": "A calling card: one photo, name, one sentence, four words of nav. Lists are centered plain text. Scroll for work.",
  "4-corners": "The navigation lives in the four corners of the screen; the photo and one sentence sit in the middle. Nothing else.",
  "5-portrait": "Jia-style: big B&W portrait, one scrolling page. Name in blackletter: UnifrakturMaguntia (ornate fraktur).",
  "5b-pirata": "Same page, name in Pirata One — cleaner blackletter, normal hyphen, most legible.",
  "5c-cook": "Same page, name in UnifrakturCook — bold curly blackletter, closest to the Forever Magazine reference.",
  "6-sidebar": "Amy-style: left nav, plain sans. Home is photo + bio only; Work is its own page.",
  "7-onepage": "Plain serif, everything on one scroll, ruled rows.",
  "8-contents": "Book title page + table of contents with dot leaders. Serif, drop cap, small author photo.",
  "9-frame": "Corners + Portrait: one page per corner, her name set on the photo, Instagram/LinkedIn icons bottom centre.",
}

imgs = {}
for f in sorted(os.listdir(IMG_DIR)):
    if f.endswith(".webp"):
        imgs["/images/" + f] = "data:image/webp;base64," + base64.b64encode(open(os.path.join(IMG_DIR, f), "rb").read()).decode()

docs = []
for path in sorted(glob.glob(os.path.join(MOCK_DIR, "*.html"))):
    slug = os.path.basename(path)[:-5]
    num, _, name = slug.partition("-")
    h = re.sub(r'<div class="badge">.*?</div>', "", open(path).read())
    docs.append({"slug": slug, "label": f"{num} · {name.replace('onepage','One Page').title() if name!='onepage' else 'One Page'}", "desc": DESC.get(slug, ""), "html": h})

page = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sangeeta — website design options</title>
<style>
body{{margin:0;font-family:-apple-system,system-ui,Helvetica,Arial,sans-serif;background:#1a1a1a;color:#eee;height:100vh;display:flex;flex-direction:column}}
header{{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#111;border-bottom:1px solid #333;flex-wrap:wrap}}
header h1{{font-size:14px;font-weight:600;margin:0 14px 0 0;letter-spacing:.02em}}
header button{{font:13px system-ui;background:#2a2a2a;color:#ddd;border:1px solid #444;border-radius:6px;padding:7px 12px;cursor:pointer}}
header button.on{{background:#fff;color:#000;border-color:#fff}}
header .sp{{flex:1}}
.desc{{padding:8px 14px;font-size:13px;color:#aaa;background:#151515;border-bottom:1px solid #2a2a2a}}
main{{flex:1;display:flex;justify-content:center;background:#1a1a1a;overflow:hidden}}
iframe{{border:0;background:#fff;height:100%;width:100%;max-width:100%;transition:max-width .2s}}
main.tablet iframe{{max-width:820px}} main.mobile iframe{{max-width:390px}}
</style></head><body>
<header><h1>Design options</h1><span id="tabs"></span><span class="sp"></span><span class="vw"><button data-v="desktop" class="on">Desktop</button><button data-v="tablet">Tablet</button><button data-v="mobile">Phone</button></span></header>
<div class="desc" id="desc"></div>
<main id="main"><iframe id="f" title="preview"></iframe></main>
<script>
const IMGS={json.dumps(imgs)};
const DOCS={json.dumps(docs)};
const blobs={{}};
for(const k in IMGS){{const b=atob(IMGS[k].split(',')[1]);const a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);blobs[k]=URL.createObjectURL(new Blob([a],{{type:'image/webp'}}));}}
const tabs=document.getElementById('tabs'),f=document.getElementById('f'),desc=document.getElementById('desc');
DOCS.forEach((d,i)=>{{const b=document.createElement('button');b.textContent=d.label;b.onclick=()=>show(i);tabs.appendChild(b);}});
function show(i){{[...tabs.children].forEach((b,j)=>b.classList.toggle('on',j===i));const d=DOCS[i];desc.textContent=d.desc;let h=d.html;for(const k in blobs)h=h.split(k).join(blobs[k]);f.srcdoc=h;history.replaceState(null,'','#'+d.slug);}}
document.querySelectorAll('.vw button').forEach(b=>b.onclick=()=>{{document.querySelectorAll('.vw button').forEach(x=>x.classList.remove('on'));b.classList.add('on');document.getElementById('main').className=b.dataset.v;}});
const start=Math.max(0,DOCS.findIndex(d=>'#'+d.slug===location.hash));show(start);
</script></body></html>'''
open(OUT, "w").write(page)
print(f"{len(docs)} options → {os.path.relpath(OUT, ROOT)} ({os.path.getsize(OUT)/1e6:.2f} MB)")
