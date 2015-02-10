jQuery(document).ready(function() {
                /*
                 * Replace all SVG images with inline SVG
                 */
                 jQuery('img.evo-logo').each(function(){
                  var $img = jQuery(this);
                  var imgClass = $img.attr('class');
                  var imgURL = $img.attr('src');
                  
                  jQuery.get(imgURL, function(data) {
                            // Get the SVG tag, ignore the rest
                            var $svg = jQuery(data).find('svg');
                            
                            
                            // Remove any invalid XML tags as per http://validator.w3.org
                            $svg = $svg.removeAttr('xmlns:a');
                            
                            // Replace image with new SVG
                            $img.replaceWith($svg);
                          });
                });
               });