<?php

/**************************************************************************************************
This Roundcube Plugin sets the search box to search in all fields except "Body" and "Entire message" and to search in "All folders"
It works with Larry skins and Litecube-f skin (it does not work with Classic skin).
Tested on Roundcube version 1.3.8 in cPanel
**************************************************************************************************/
class searchbox_scope extends rcube_plugin 
{
   //If your plugin is meant to only run in a certain task (e.g. mail,addressbook,settings) you should specify a public property $task. If this property is set the plugin will only be activated within that specific task in order to save memory and performance in all the other tasks.
   public $task = 'mail'; 
   
   function init()
   {
       $this->load_config('config.inc.php');
       $this->include_script('client.js');
       //$this->include_stylesheet('client.css');
       //$this->add_hook('login_after', array($this, 'test_func'));       
   }

   /*
   function test_func($args)
   { 
   }
   */
}
