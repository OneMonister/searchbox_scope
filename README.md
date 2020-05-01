# Roundcube plugin searchbox_scope
Roundcube plugin to set the default search box scope to "All folders" and all fields except "Body" and "Entire message"

Afer entering something into the Roundcube search box many users think it will look in all folders, but Roundcube by default searches only in the current selected folder. To change the search scope the user has to manually click on the little arrow in the search box and select "All folders". Moreover these settings are not even retained, hence each time the user clicks on another folder (or again on the same folder) the search scope goes back to "Current folder".
This plugin changes the default search scope to "All folders", and and all fields except "Body" and "Entire message" *

![Rouncube default search box](https://i.imgur.com/pGto4Ha.jpg)

<sub>[*] for performance reasons it's better to keep "Body" and "Entire message" unchecked</sub>

ref. [official guide to build Roundcube plugins](https://github.com/roundcube/roundcubemail/wiki/Plugin-API)

## How to install this plugin in Roundcube

### Requirements

I only test this plugin with following environments. Other setup may work with luck.

- Roundcube 1.3.8+ (it works also in cPanel Roundcube)
- Roundcube skins Larry and Litecube-f (**it does not work well with Classic skin**)

### Install via Composer
TODO...

### Install manually
1. Create folder `searchbox_scope` in `ROUNDCUBE_HOME/plugins` (on cPanel based servers is located in `/usr/local/cpanel/base/3rdparty/roundcube/plugins/`)
2. Copy all plugin files there.
3. TODO: I'll add some settings by editing `ROUNDCUBE_HOME/plugins/searchbox_scope/config.inc.php`.
4. Edit `ROUNDCUBE_HOME/config/config.inc.php` (on cPanel based servers is located in `/usr/local/cpanel/base/3rdparty/roundcube/config/`) locate `$config['plugins']` and add `'searchbox_scope',` there (e.g. `$config['plugins'] = ['searchbox_scope', 'calendar', ...];`)



