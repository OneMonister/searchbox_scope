//window.alert("client.js"); //DEBUG
//console.log("client.js"); //DEBUG

(function()
{
   var f = function(evt)
   {
      //console.log("f"); //DEBUG
   
      //In searchbox turns on "All folders"   
      //$('#s_scope_all').css("margin-top", "15px"); //DEBUG   
      $('#s_scope_all').click(); 
      
      //In searchbox turns on all checkboxes except "Body" and "Entire message"
      if( !$('#s_mod_subject').is(":checked") )
         $('#s_mod_subject').click();
      if( !$('#s_mod_from').is(":checked") )
         $('#s_mod_from').click();
      if( !$('#s_mod_to').is(":checked") )
         $('#s_mod_to').click();
      if( !$('#s_mod_cc').is(":checked") )
         $('#s_mod_cc').click();
      if( !$('#s_mod_bcc').is(":checked") )
         $('#s_mod_bcc').click();      
   }

   /**************************************************************************************************
   Some events you can attach to:
   
   'init' event when the DOM is fully loaded
   
   'selectfolder': triggered when a user selects a new folder (either in mail or address book task). Please note that this is called before the message list is reloaded.
   
   'listupdate': similar to the selectfolder event but triggered after the message list (or contacts) list was updated.
   
   **************************************************************************************************/
   rcmail.addEventListener('init', f);
   rcmail.addEventListener('selectfolder', f);
})();


