=== Lookatme ===
Contributors: aditmlh
Tags: data collection, user info, IP address, device info, cookies, session, coordinates, camera
Requires at least: 5.6
Tested up to: 6.3
Requires PHP: 7.4
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Lookatme adalah plugin WordPress yang dirancang untuk mengumpulkan dan menampilkan data pengguna seperti IP Address, informasi perangkat, cookies, session, koordinat, status jaringan, serta menyediakan akses ke kamera langsung.

== Features ==

* Mengumpulkan IP Address, informasi perangkat, cookies, dan data session.
* Menyimpan koordinat GPS, status jaringan, ISP, tipe perangkat, dan informasi browser.
* Menampilkan data pengguna di dashboard WordPress.
* Menyalakan kamera perangkat dan menampilkan aliran video langsung.

== Installation ==

1. Download the plugin zip file.
2. Go to your WordPress admin panel.
3. Navigate to Plugins > Add New.
4. Click on 'Upload Plugin' and select the downloaded zip file.
5. Click 'Install Now' and then 'Activate Plugin'.

== Usage ==

1. After activation, go to the WordPress admin menu.
2. Click on 'Lookatme' to access the plugin settings page.
3. The settings page will display a table with collected user data and a live video feed from the camera.
4. The plugin will automatically start collecting data on page load and will activate the camera if permissions are granted.

== Changelog ==

= 1.0 =
* Initial release.

== Frequently Asked Questions ==

= What data does the Lookatme plugin collect? =
The plugin collects IP Address, device information, cookies, session data, coordinates, network status, ISP, device type, browser info, and the page visited. It also provides access to the device's camera.

= How is user data stored? =
Data is stored in a custom table in the WordPress database and can be viewed on the plugin settings page.

= How do I enable the camera feature? =
The camera feature will be enabled automatically when the plugin detects that the user is on the settings page. The user must grant permission to access the camera.

= Is user consent required? =
Yes, user consent is required to access the camera. The plugin does not collect data without the user's explicit consent.

== Screenshots ==

1. **Dashboard Page**: Displays collected data in a table format.
2. **Live Video Feed**: Shows live video from the user's camera.

== Upgrade Notice ==

= 1.0 =
Initial release.

== License ==

This plugin is released under the GNU General Public License (GPLv2 or later). See the [license](http://www.gnu.org/licenses/gpl-2.0.html) for details.
