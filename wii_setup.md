# yt2009wii - aka NexTube

a fairly accurate 2009 youtube frontend + a wii revival.

**
THIS IS NOT ASSOCIATED NOR ENDORSED BY GOOGLE, YOUTUBE, OR NINTENDO
**

Credits:

YouTube/Google/Nintendo (of course)

DX (Creator of YT2009)

SuperrSonic (found some shit about codecs)

NCP3.0 (Me/Owner)

---

## already have an instance 

- [1]. once you have your local instance setup, make sure you are using port 80, and your local ip adress, and you're connected to the same network as your wii.

- [2]. grab these programs

  grab a YouTube channel WAD (you can back it up from your wii)
  
  https://github.com/jindrapetrik/jpexs-decompiler
  
  https://www.java.com/en/
  
  https://gbatemp.net/threads/wii-cs-tools-0-3.207472/ (https://code.google.com/archive/p/showmiiwads/downloads)

- [3]. launch JEPXS
 
  <img src="doc-imgs/wii01.png"/>

  open these three files

  (rootofyt2009)/media/wii/apiplayer.swf (this loads the real player)

  (rootofyt2009)/media/wii/apiplayer-vflZLm5Vu.swf (the real player)

  (rootofyt2009)/wiitv/leanbacklite_wii.swf (this is the app pretty much, this is what the channel loads)

- [4]. editing apiplayer

   Open Scirpts -> frame 1 -> DoAcition (the first one)
  
   And then simply change any url pointing to 192.168.1.150 to whatever you want.

- [5] editing apiplayer-vflZLm5Vu.swf
      
    This is pretty simple replace all instaces of 192.168.1.150 with your url, and also replace
    all instances of get_video_info with get_wii_video_info (this is because we need to mess with
    stuff on get_video_info in order to prevent it from giving issues). so for example
    192.168.1.150/get_video_info should become (urlyour)/get_wii_video_info 

- [6] editing leanbacklite_wii

    Same procces, just search for all URLs with 192.168.1.150 and replace it with whatever your url is.
  
- [7] extracting the wad

    Use WADMII, and select your wad and extract it to a folder.

- [8]

    Use U8Mii to extract 02.app (full name is
     
    
