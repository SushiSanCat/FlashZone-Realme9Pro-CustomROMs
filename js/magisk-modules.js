const moduleData = [
    {
        name: 'Anti Bootloop',
        size: '4.89KB',
        version: 'v1.3.4',
        androidRequirement: 'Android 13+',
        publishedBy: 'nedorazrab0',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        banner: 'assets/Anti bootloop.png',
        description: `
Bootloop protection
This module works in both late_start and post-fs-data modes
so it can fix a bootloop at the early boot stage
        `
    },
    {
        name: 'Block Ads',
        size: '732KB',
        version: 'v3.50',
        androidRequirement: 'Android 13+',
        publishedBy: 'pantsufan',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        banner: 'assets/BlockAds.png',
        description: `
A Magisk Advertisement Blocker Module
The module was made for personal use but since it was really good for daily use I decided to make it public.

Android Downloads Release Stars Donate

Features
Blocks Ads
Blocks Porn Sites
Blocks Android Apps Ads
Download
Magisk Module
Non Rooted Device?
Version Without Porn Block
Updates
The module would be updated if there are any major changes to the host file.

To Get Updates Faster Join The Telegram Channel
Telegram Channel

Credits
@topjohnwu for Magisk.
@Zackptg5 For Magisk Template
OISD For Host File
1Hosts For Host File
Anti-Porn For Host File
        `
    },
    {
        name: 'LSposed Framework (forked)',
        size: '2.51MB',
        version: 'v1.9.3',
        androidRequirement: 'Android 14+',
        publishedBy: 'mywalkb',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        banner: 'assets/LSposedFramework.png',
        description: `
Introduction
LSPosed is a great XPosed Framework, but it has a big problem, only manager can manage scope. LSPosed team don't accept PR for CLI or API Module, the TODO issues are old more one year and never completed, is more important the GUI changed many times but not CLI or API Module. In my fork API Module and CLI are implemented. CLI require root user because must access files readable only by root.

A Riru / Zygisk module trying to provide an ART hooking framework which delivers consistent APIs with the OG Xposed, leveraging LSPlant hooking framework.

Xposed is a framework for modules that can change the behavior of the system and apps without touching any APKs. That's great because it means that modules can work for different versions and even ROMs without any changes (as long as the original code was not changed too much). It's also easy to undo. As all changes are done in the memory, you just need to deactivate the module and reboot to get your original system back. There are many other advantages, but here is just one more: multiple modules can do changes to the same part of the system or app. With modified APKs, you have to choose one. No way to combine them, unless the author builds multiple APKs with different combinations.

Supported Versions
Android 8.1 ~ 15 Beta 2.1

Install
Install Magisk v24+ (For Zygisk flavor) or Magisk 23 (For Riru flavor)
(For Riru flavor) Install Riru v26.1.7+
Download and install LSPosed in Magisk app
Reboot
Open LSPosed manager from notification
Have fun :)
Download
For stable releases, please go to Github Releases page
For canary build, please check Github Actions
Note: debug builds are only available in Github Actions.

Migration
You can install LSPosed_mod on top of official LSPosed installation. If the app is installed and not parasitic, the app must be reinstalled from apk distribuited with LSPosed_mod.

Get Help
Only bug reports from THE LATEST DEBUG BUILD will be accepted.

GitHub issues: Issues
Wiki
(For Chinese speakers) 本项目只接受英语标题的issue。如果您不懂英语，请使用翻译工具
For Developers
Developers are welcome to write Xposed modules with hooks based on LSPosed Framework. A module based on LSPosed framework is fully compatible with the original Xposed Framework, and vice versa, a Xposed Framework-based module will work well with LSPosed framework too.

Xposed Framework API
We use our own module repository. We welcome developers to submit modules to our repository, and then modules can be downloaded in LSPosed.

LSPosed Module Repository
Translation Contributing
You can contribute translation here.

Credits
LSPosed: fork source (makes all these possible)
Magisk: makes all these possible
Riru: provides a way to inject code into zygote process
XposedBridge: the OG Xposed framework APIs
Dobby: used for inline hooking
LSPlant: the core ART hooking framework
EdXposed: fork source
XZ Embedded: for decompress debug_info section into stripped libraries
SandHook: ART hooking framework for SandHook variant
YAHFA: previous ART hooking framework
dexmaker and dalvikdx: to dynamically generate YAHFA hooker classes
DexBuilder: to dynamically generate YAHFA hooker classes
        `
    },
    {
        name: 'Play Integrity Fix',
        size: '174KB',
        version: 'v19.0',
        androidRequirement: 'Android 10+',
        publishedBy: 'chiteroman',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        banner: 'assets/PlayIntegrityFix.jpg',
        description: `
Play Integrity Fix
This module tries to fix Play Integrity and SafetyNet verdicts to get a valid attestation.

NOTE
This module is not made to hide root, nor to avoid detections in other apps. It only serves to pass Device verdict in the Play Integrity tests and certify your device. All issues created to report a non-Google app not working will be closed without notice.

Tutorial
You will need root and Zygisk, so you must choose ONE of this three setups:

Magisk with Zygisk enabled.
KernelSU with ZygiskNext module installed.
APatch with ZygiskNext module installed.
After flashing and reboot your device, you can check PI and SN using these apps:

Play Integrity -> https://play.google.com/store/apps/details?id=gr.nikolasspyr.integritycheck
SafetyNet -> https://play.google.com/store/apps/details?id=rikka.safetynetchecker
NOTE: if you get an error message about a limit, you need to use another app, this is because a lot of users are requesting an attestation.

NOTE: SafetyNet is obsolete, more info here: https://developer.android.com/privacy-and-security/safetynet/deprecation-timeline

Also, if you are using custom rom or custom kernel, be sure that your kernel name isn't blacklisted, you can check it running uname -r command. This is a list of banned strings: https://xdaforums.com/t/module-play-integrity-fix-safetynet-fix.4607985/post-89308909

Verdicts
After requesting an attestation, you should get this result:

MEETS_BASIC_INTEGRITY ✅
MEETS_DEVICE_INTEGRITY ✅
MEETS_STRONG_INTEGRITY ❌ (Can be achieved with some additional work)
MEETS_VIRTUAL_INTEGRITY ❌ (this is for emulators only)
You can know more about verdicts in this post: https://xdaforums.com/t/info-play-integrity-api-replacement-for-safetynet.4479337/

And in SafetyNet you should get this:

basicIntegrity: true
ctsProfileMatch: true
evaluationType: BASIC
A word on passing Strong Integrity
While this module only returns passing verdicts for as far up as MEETS_DEVICE_INTEGRITY, it is possible to achieve a passing verdict for MEETS_STRONG_INTEGRITY by using 5ec1cff's TrickyStore (XDA thread). To put simply, this allows for spoofing a valid certificate chain (Often distributed as a file named keybox.xml and just called a keybox) to your device's Trusted Execution Environment (TEE) module, in addition to spoofing the bootloader as locked.

However, it must be stressed that a keybox is hard to come by, given that they're leaked (Usually inadvertently) from OEMs and vendors. Even still, they are also often quite quickly revoked, due to a combination of people sending a deluge of server requests (Mostly for flexing their strong verdicts, which they probably didn't need anyway... You know who you are) and Google deploying specialised crawlers for automated detection. And, as quickly mentioned before, you'll likely won't even need one, since basic functions (NFC payments and RCS messaging... etc.) and the vast majority of apps only mandate device integrity/a spoofed locked bootloader.

As for when a keybox is eventually revoked, you'll know it's happened when you're only passing MEETS_BASIC_INTEGRITY or by checking the key's validity status via vvb2060's Key Attestation Demo. At this point, you'll need to find another unrevoked keybox (Strong integrity), use the publicly available AOSP keybox (Device integrity), or just remove TrickyStore entirely (Device integrity).

TL;DR: Unless it is ABSOLUTELY VITAL for your use case(s), chances are you'll be completely fine only passing up as far as MEETS_DEVICE_INTEGRITY, and not diving into this rabbit hole.

NOTE: Per the upcoming changes for Play Integrity's verdicts on May 2025, by default you'll only pass MEETS_BASIC_INTEGRITY as device integrity now requires a locked bootloader on Android 13 and later. While this can be circumvented by using the spoofVendingSdk attribute (Spoofs SDK 32/Android 12) in your pif.json configuration, this will, to a varying degree, break some functionality in the Play Store (Given that this is an experimental feature of PIF) including the likes of degraded ease of navigation, and the store outright crashing whenever an app is installed/updated. YMMV, to which it probably will.

Acknowledgments
kdrag0n & Displax for the original idea.
osm0sis for his original autopif2.sh script, and backslashxx & KOWX712 for improving it (action.sh).
FAQ
https://xdaforums.com/t/pif-faq.4653307/

Download
https://github.com/chiteroman/PlayIntegrityFix/releases/latest

Donations
PayPal
        `
    },
    {
        name: 'Realmify',
        size: '15.2KB',
        version: 'v2.1',
        androidRequirement: 'Android 13+',
        publishedBy: 'bengris32',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        banner: 'assets/realmify.png',
        description: `
⚠️WARNING:⚠️ DO NOT INSTALL THIS MODULE IF YOU ARE NOT ON STOCK ROM!

Welcome to Realify! This module attempts to make the budget realmeUI experience much better, by enabling features which are commonly disabled on what Realme considers "low-end" devices.

Disclaimer
 * Your warranty is void.
 * I am not responsible for bricked devices, dead SD cards, thermonuclear war,
 * or you getting fired because the alarm app failed.
 * Please do some research if you have any concerns about features included
 * in the products you find here before flashing it!
 * YOU are choosing to make these modifications.

Compatbility
This module targets devices running realmeUI 1/2/3/4.

Currently, the module has been tested on the following devices:

realme 8 (RMX3085 with UI 3.0)
realme C11 (RMX2185/RMX2185SG with UI 2.0)
realme C12 (RMX2189/RMX2184 with UI 2.0)
realme C15 (RMX2180 with UI 2.0)
realme C21 (RMX3201 with UI 2.0)
realme 8 5G (RMX3241 with UI 3.0)
Feel free to contribute and open:

An issue - If the module did not work for you :(
A PR - To add the device to this list :)
Special Thanks
techyminati for the method used to control features, general improvements, and realmeUI 1/2/4 support!
This module also uses MMT-Extended by Zackptg5
        `
    },
    {
        name: 'Call-Of-Duty-Mobile-120FPS-Unlocker v5.0',
        size: '2.13KB',
        version: 'v5.0',
        androidRequirement: 'Android 13+',
        publishedBy: 'N/A',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `
⚠️WARNING:⚠️ AFTER INSTALLING THIS MODULE, YOUR DEVICE MODEL WILL CHANGE TO "IQOO 12 PRO"
But dont worry! you can change it back to your original device model if you uninstall the module.

Benefits of Unlocking 120FPS in CODM:
Unlocking 120FPS in Call of Duty Mobile comes with tons of advantages!

Key Benefits:
1. Smoother gameplay
2. Less input lag
3. Better aiming accuracy
4. Higher chances to win
5. Competitive edge in multiplayer matches
6. Faster response times
7. Improved graphics
8. Customization options

Is Unlocking 120FPS Legal?
Many players wonder if unlocking 120FPS is legal or not. We'll clarify any legal questions you might have about this topic.

Performance vs. Battery Life Trade-off:
Unlocking 120FPS might come with some trade-offs, especially regarding battery life. We'll talk about ways to keep your gaming fun without draining your device.

Conclusion:
In short, unlocking 120FPS in Call of Duty Mobile with a Magisk Module can truly change everything for gamers! It gives you an awesome edge over others while enjoying smoother gameplay and improved accuracy. The CODM 120FPS Unlocker makes it possible for serious gamers looking for an advantage. With faster response times and nice graphics—it's something every fan should think about! Yes, there are risks involved but used wisely; it can upgrade your gaming like never before. So why not give it a shot? Level-up your game today!
        `,
        banner: 'assets/CODM120fpsUnlocker.png'
    },
    {
        name: 'Zygisk-Detach',
        size: '173KB',
        version: 'v1.20.0',
        androidRequirement: 'Android 12+',
        publishedBy: 'j-hc',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `
Zygisk module to detach installed apps from Play Store, hooking binder
        `,
        banner: 'assets/zygisk-detach.png'
    },
    {
        name: 'Zygisk Next',
        size: '3.36MB',
        version: 'v1.2.8',
        androidRequirement: 'Android 12+',
        publishedBy: 'Dr-TSNG',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `
Standalone implementation of Zygisk

Zygisk Next
Standalone implementation of Zygisk, providing Zygisk API support for KernelSU and a replacement of Magisk's built-in Zygisk.

Copyright Notice
Copyright © 2024 Zygisk Next developers. All rights reserved.

The software Zygisk Next, starting from version v4-0.9.2, is no longer under the GPL-3.0 License. Instead, all rights to the software are reserved by the owner.

The following conditions now apply:

No Modifications: The software may not be modified in any way. This includes but is not limited to changing, adding, or removing any part of the software's code or functionality.

No Redistribution: The software may not be redistributed in any form. This includes but is not limited to renaming, selling, or including the software as part of another project.

No Picking: No parts, pieces, or components of the software may be extracted and submitted to other projects. This includes, but is not limited to, code snippets, functions, and released binaries.

No Claim to Succession: Any fork of the software that was created before the license change may not claim to be an official or unofficial successor to the project. This includes but is not limited to using the project's name, branding, or reputation to imply a connection to the original project.

Requirements
General
No multiple root implementation installed
KernelSU
Minimal KernelSU version: 10940
Minimal KernelSU Manager (ksud) version: 11575
Magisk
Minimal version: 26402
Built-in Zygisk turned off
Compatibility
Zygisk Next only guarantees the same behavior of Zygisk API, but will NOT ensure Magisk's internal features.
        `,
        banner: 'assets/ZygiskNext.png'
    },
    {
        name: 'Zygisk Assistant',
        size: '950KB',
        version: 'v2.1.4',
        androidRequirement: 'Android 12+',
        publishedBy: 'snake-4',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `

⚠️CONFLICT WITH SHAMIKO IF YOU ALREADY HAVE IT INSTALLED⚠️

👾Zygisk Assistant and Shamiko are both Zygisk modules designed to hide root from applications, but they differ in their approach and source code. Zygisk Assistant is an open-source alternative to the closed-source Shamiko. While Shamiko has more features and functionalities, Zygisk Assistant is effective at hiding root unless something is directly injected into the target process, such as Xposed modules

A Zygisk module to hide root for KernelSU, Magisk and APatch, designed to work on Android 5.0 and above.

A Zygisk module that aims to hide the existence root and Zygisk.

Report Bug · Request Feature · Latest Release

About The Project
Using the release build is recommended over the debug build. Only use debug builds if you are going to make a bug report.

KernelSU & APatch users:
Install ZygiskNext.
Make sure the unmount setting is enabled for the target app in the KernelSU/APatch Manager.
Disable Enforce DenyList in ZygiskNext settings if there is one.
Magisk users:
Update your Magisk to 27.0 or newer for better hiding capabilities. (optional)
Turn on Zygisk in Magisk settings.
Turn off Enforce DenyList in Magisk settings.
Add the target app to the deny list unless you're using a Magisk fork with a white list instead.
Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/FeatureName)
Commit your Changes (git commit -m 'Add some FeatureName')
Push to the Branch (git push origin feature/FeatureName)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.
        `,
        banner: 'assets/ZygiskAssistant.png'
    },
    {
        name: 'TrickyStore',
        size: '2.24MB',
        version: 'v1.2.1',
        androidRequirement: 'Android 12+',
        publishedBy: '5ec1cff',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `
Tricky Store
A trick of keystore. Android 10 or above is required.

This module is used for modifying the certificate chain generated for android key attestation.

中文 README

Stop opening source
Due to the rampant misuse and the contributions received after open-sourcing being less than expected, this module will be closed-source starting from version 1.1.0.

Usage
Flash this module and reboot.
For more than DEVICE integrity, put an unrevoked hardware keybox.xml at /data/adb/tricky_store/keybox.xml (Optional).
Customize target packages at /data/adb/tricky_store/target.txt (Optional).
Enjoy!
All configuration files will take effect immediately.

keybox.xml
format:

<?xml version="1.0"?>
<AndroidAttestation>
    <NumberOfKeyboxes>1</NumberOfKeyboxes>
    <Keybox DeviceID="...">
        <Key algorithm="ecdsa|rsa">
            <PrivateKey format="pem">
-----BEGIN EC PRIVATE KEY-----
...
-----END EC PRIVATE KEY-----
            </PrivateKey>
            <CertificateChain>
                <NumberOfCertificates>...</NumberOfCertificates>
                    <Certificate format="pem">
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
                    </Certificate>
                ... more certificates
            </CertificateChain>
        </Key>...
    </Keybox>
</AndroidAttestation>

Support TEE broken devices
Tricky Store will hack the leaf certificate by default. On TEE broken devices, this will not work because we can't retrieve the leaf certificate from TEE. In this case, we fallback to use generate key mode automatically.

You can add a ! after a package name to force use generate certificate support for this package. Also, you can add a ? after a package name to force use leaf hack mode for this package.

For example:

# target.txt
# use auto mode for KeyAttestation App
io.github.vvb2060.keyattestation
# always use leaf hack mode 
io.github.vvb2060.mahoshojo?
# always use certificate generating mode for gms
com.google.android.gms!
Customize security patch level (1.2.1+)
Create the file /data/adb/tricky_store/security_patch.txt.

Simple:

# Hack os/vendor/boot security patch level
20241101
Advanced:

# os security patch level is 202411
system=202411
# do not hack boot patch level
boot=no
# vendor patch level is 20241101 (another format)
vendor=2024-11-01
# default value
# all=20241101
# keep consistent with system prop
# system=prop
Note: this feature will only hack the result of KeyAttestation, it will not do resetprop, you need do it yourself.

Acknowledgement
FrameworkPatch
BootloaderSpoofer
KeystoreInjection
LSPosed
        `,
        banner: 'assets/TrickyStore.png'
    },
    {
        name: 'Shamiko',
        size: '4.75MB',
        version: 'v1.2.1',
        androidRequirement: 'Android 12+',
        publishedBy: 'LSPosed',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `

⚠️CONFLICT WITH ZYGISK ASSISTANT IF YOU ALREADY HAVE IT INSTALLED⚠️

👾Zygisk Assistant and Shamiko are both Zygisk modules designed to hide root from applications, but they differ in their approach and source code. Zygisk Assistant is an open-source alternative to the closed-source Shamiko. While Shamiko has more features and functionalities, Zygisk Assistant is effective at hiding root unless something is directly injected into the target process, such as Xposed modules

Shamiko is a powerful Magisk module developed by the LSPosed team that enhances root concealment by leveraging Zygisk, Magisk’s native process injection system. Designed to work seamlessly with MagiskHide successor functionality, Shamiko hides root status, Magisk, and Zygisk from detection by apps like banking apps, games, and DRM-sensitive services.
Unlike basic root-hiding methods, Shamiko operates at a deeper system level, giving it broader compatibility and stronger hiding capabilities—especially when used in conjunction with LSPosed or other Riru/Zygisk-based frameworks. It supports denylist mode for fine-grained app targeting but requires that Magisk’s denylist is not enforced.

Key Features:
Advanced root hiding using Zygisk
Works with apps that detect Magisk, Zygisk, or root
Supports selective app targeting via denylist
Actively maintained by the LSPosed team

Requirements:
Magisk v24.0+ with Zygisk enabled
LSPosed (optional but recommended for enhanced module integration)
Denylist must not be enforced
        `,
        banner: 'assets/Shamiko.png'
    },
    {
        name: 'CODM-HIGH FPS Unlocker (MAGISK MODULE 20+)',
        size: '211KB',
        version: 'v1.0',
        androidRequirement: 'Android 13+',
        publishedBy: 'HIBISCUS',
        downloadLink: '#',
        installGuide: `
📱📂Installing a .zip Magisk Module
Download the Magisk module zip file
From trusted sources like GitHub, XDA, or Telegram channels.
Example file: lsposed-v1.9.2-zygisk.zip

Open the Magisk app
Go to the “Modules” tab
Tap “Install from Storage”
Select the downloaded .zip module
Wait for the installation script to run
It will show terminal-like output.
Look for Installation successful or similar at the end.
Tap “Reboot”
Required for the module to activate.

🔄 After Reboot:
The module should now be active.
Some modules have configuration UIs or require extra setup (e.g., LSPosed needs LSPosed Manager).

⚠️ Troubleshooting Tips:
If your device bootloops:
Boot into Magisk’s Safe Mode by holding volume down while booting, or use recovery to delete the module at /data/adb/modules.
Not all modules work on all Android versions. Always check compatibility.
Modules may conflict with each other or with certain ROMs.
`,
        description: `
⚠️WARNING:⚠️ AFTER INSTALLING THIS MODULE, YOUR DEVICE MODEL WILL CHANGE TO "SO-52A"
But dont worry! you can change it back to your original device model if you uninstall the module.

TESTED ON: SAMSUNG F62 (may also work on other devices)

Benefits of Unlocking 120FPS in CODM:
Unlocking 120FPS in Call of Duty Mobile comes with tons of advantages!

Key Benefits:
1. Smoother gameplay
2. Less input lag
3. Better aiming accuracy
4. Higher chances to win
5. Competitive edge in multiplayer matches
6. Faster response times
7. Improved graphics
8. Customization options

Is Unlocking 120FPS Legal?
Many players wonder if unlocking 120FPS is legal or not. We'll clarify any legal questions you might have about this topic.

Performance vs. Battery Life Trade-off:
Unlocking 120FPS might come with some trade-offs, especially regarding battery life. We'll talk about ways to keep your gaming fun without draining your device.

Conclusion:
In short, unlocking 120FPS in Call of Duty Mobile with a Magisk Module can truly change everything for gamers! It gives you an awesome edge over others while enjoying smoother gameplay and improved accuracy. The CODM 120FPS Unlocker makes it possible for serious gamers looking for an advantage. With faster response times and nice graphics—it's something every fan should think about! Yes, there are risks involved but used wisely; it can upgrade your gaming like never before. So why not give it a shot? Level-up your game today!
        `,
        banner: 'assets/CODM120fpsUnlocker.png'
    },
];

// Add debug logging
console.log('Module data count:', moduleData.length);

// DOM elements
const romGrid = document.querySelector('.rom-grid');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add modal overlay for module description
function createDescriptionModal() {
    if (document.getElementById('rom-desc-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'rom-desc-modal';
    modal.innerHTML = `
        <div class="rom-desc-modal-backdrop"></div>
        <div class="rom-desc-modal-content">
            <div class="rom-desc-modal-header">
                <button class="rom-desc-modal-close">&times;</button>
            </div>
            <div class="rom-desc-modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    // Close on backdrop or close button
    modal.querySelector('.rom-desc-modal-backdrop').onclick = closeDescriptionModal;
    modal.querySelector('.rom-desc-modal-close').onclick = closeDescriptionModal;
}

function openDescriptionModal(html) {
    createDescriptionModal();
    const modal = document.getElementById('rom-desc-modal');
    modal.style.display = 'flex';
    modal.querySelector('.rom-desc-modal-body').innerHTML = html;
    document.body.style.overflow = 'hidden';
    // Animate blur in
    const backdrop = modal.querySelector('.rom-desc-modal-backdrop');
    backdrop.classList.remove('closing');
    setTimeout(() => backdrop.classList.add('active'), 10);
}

function closeDescriptionModal() {
    const modal = document.getElementById('rom-desc-modal');
    if (!modal) return;
    const content = modal.querySelector('.rom-desc-modal-content');
    const backdrop = modal.querySelector('.rom-desc-modal-backdrop');
    if (backdrop) {
        backdrop.classList.remove('active');
        backdrop.classList.add('closing');
    }
    if (content) {
        content.classList.add('closing');
        content.addEventListener('animationend', function handler() {
            content.classList.remove('closing');
            modal.style.display = 'none';
            document.body.style.overflow = '';
            content.removeEventListener('animationend', handler);
            if (backdrop) backdrop.classList.remove('closing');
        });
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        if (backdrop) backdrop.classList.remove('closing');
    }
}

// Function to render module cards
function renderModuleCards(modules = moduleData) {
    romGrid.innerHTML = '';
    
    modules.forEach(module => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'rom-card';
        const bannerPath = module.banner || 'assets/LineageOS.png';
        let updatedLine = '';
        if (module.updated) {
            updatedLine = `<p><strong>Updated:</strong> ${module.updated}</p>`;
        }
        moduleCard.innerHTML = `
<img src="${bannerPath}" alt="${module.name} banner" class="rom-banner" onerror="this.onerror=null;this.src='assets/LineageOS.png';">
<h3>${module.name}</h3>
${module.name === 'Shamiko' ? 
  `<div class="conflict-warning" onclick="scrollToModule('Zygisk Assistant')">
    ⚠️ CONFLICT WITH ZYGISK ASSISTANT
    <button class="conflict-help" onclick="event.stopPropagation(); showConflictHelp('Zygisk Assistant')">?</button>
  </div>` : ''}
${module.name === 'Zygisk Assistant' ? 
  `<div class="conflict-warning" onclick="scrollToModule('Shamiko')">
    ⚠️ CONFLICT WITH SHAMIKO
    <button class="conflict-help" onclick="event.stopPropagation(); showConflictHelp('Shamiko')">?</button>
  </div>` : ''}
  ${module.name === 'CODM-HIGH FPS Unlocker (MAGISK MODULE 20+)' ? 
    `<div class="conflict-warning" onclick="scrollToModule('Call-Of-Duty-Mobile-120FPS-Unlocker v5.0')">
      ⚠️ CONFLICT WITH Call-Of-Duty-Mobile-120FPS-Unlocker v5.0
      <button class="conflict-help" onclick="event.stopPropagation(); showConflictHelp('Call-Of-Duty-Mobile-120FPS-Unlocker v5.0')">?</button>
    </div>` : ''}
  ${module.name === 'Call-Of-Duty-Mobile-120FPS-Unlocker v5.0' ? 
    `<div class="conflict-warning" onclick="scrollToModule('CODM-HIGH FPS Unlocker (MAGISK MODULE 20+)')">
      ⚠️ CONFLICT WITH CODM-HIGH FPS Unlocker (MAGISK MODULE 20+)
      <button class="conflict-help" onclick="event.stopPropagation(); showConflictHelp('CODM-HIGH FPS Unlocker (MAGISK MODULE 20+)')">?</button>
    </div>` : ''}
<p><strong>Size:</strong> ${module.size || 'N/A'}</p>
<p><strong>Version:</strong> ${module.version || 'N/A'}</p>
<p><strong>Android Requirement:</strong> ${module.androidRequirement || 'N/A'}</p>
<p><strong>Published by:</strong> ${module.publishedBy || 'N/A'}</p>
<button class="desc-toggle">Show Description</button>
<div class="rom-actions">
    <a href="${module.downloadLink}" class="download-btn">Download</a>
    <button class="instructions-btn">Install Guide</button>
</div>
        `;
        romGrid.appendChild(moduleCard);
        // Add event for description modal
        moduleCard.querySelector('.desc-toggle').onclick = function() {
            const bannerImg = `<img src="${bannerPath}" alt="${module.name} banner" class="rom-modal-banner" onerror="this.onerror=null;this.src='assets/LineageOS.png';">`;
            openDescriptionModal(`${bannerImg}<h3>${module.name}</h3><div>${module.description.replace(/\n/g, '<br>')}</div>`);
        };
        // Add event for install guide modal
        moduleCard.querySelector('.instructions-btn').onclick = function() {
            const guideText = '<h1 style="background: linear-gradient(to right, #ffd700, #ff8c00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-top: 0;">Install Guide</h1>';
            openDescriptionModal(`${guideText}<h3>${module.name}</h3><div>${module.installGuide.replace(/\n/g, '<br>')}</div>`);
        };
    });
}

function scrollToModule(moduleName) {
    const moduleCards = document.querySelectorAll('.rom-card');
    for (const card of moduleCards) {
        if (card.querySelector('h3').textContent === moduleName) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight-conflict');
            setTimeout(() => card.classList.remove('highlight-conflict'), 2000);
            break;
        }
    }
}

function showConflictHelp(conflictModule) {
    createDescriptionModal();
    const modal = document.getElementById('rom-desc-modal');
    modal.style.display = 'flex';
    modal.querySelector('.rom-desc-modal-body').innerHTML = `
        <h3>Conflict Warning</h3>
        <p>This module conflicts with ${conflictModule} if you already have it installed.</p>
        <p>You should only use one of these modules at a time.</p>
    `;
    document.body.style.overflow = 'hidden';
    // Animate blur in
    const backdrop = modal.querySelector('.rom-desc-modal-backdrop');
    backdrop.classList.remove('closing');
    setTimeout(() => backdrop.classList.add('active'), 10);
}

// Function to handle search
function handleSearch(query) {
    const filteredModules = moduleData.filter(module => 
        module.name.toLowerCase().includes(query.toLowerCase()) ||
        module.publishedBy.toLowerCase().includes(query.toLowerCase())
    );
    renderModuleCards(filteredModules);
}

// Initialize the page
function init() {
    renderModuleCards();
    
    // Search functionality
    searchButton.addEventListener('click', () => {
        handleSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', () => {
        handleSearch(searchInput.value);
    });
}

// Start the application
init();

// Ensure DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, rendering cards');
    renderModuleCards();
});

// Fallback in case DOM is already loaded
if (document.readyState === 'complete') {
    console.log('DOM already loaded, rendering immediately');
    renderModuleCards();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Check if the href is one of the sections to redirect to index.html
        if (href === '#roms' || href === '#guides' || href === '#device-info') {
            e.preventDefault();
            window.location.href = `index.html${href}`;
        } else {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth page transition for navigation links
document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 500); // Match this duration with the CSS animation duration
    });
});
