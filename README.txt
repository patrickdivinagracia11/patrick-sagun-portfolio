Patrick Sagun Portfolio - Deploy Instructions (Vercel)
Files included:
- index.html
- assets/logo.png (transparent-processed if possible)
- assets/Video_Editing_Timeline.jpg (background)

How to deploy (simple):
1. Go to https://vercel.com and sign up / log in.
2. Click "New Project" -> "Import Project" -> Drag and drop the folder contents.
3. Name the project: patricksagunportfolio
4. Click Deploy. After a minute your site will be live at https://patricksagunportfolio.vercel.app

How to add new videos:
- Open index.html and find the correct section (e.g., #vertical).
- Copy one .video-thumb block and paste it inside the grid.
- Change data-video to the embed URL (https://www.youtube.com/embed/VIDEO_ID)
- Change the <img src="..."> to https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg or upload a local thumbnail to /assets and point to it.