/*
 * jQuery Collapsible Plugin
 * Examples and documentation at: http://github.com/jgorset/jquery-collapsible
 * Copyright (c) 2011 Johannes Gorset
 * Version: 1.0 
 * License: MIT
 * Requires: jQuery v1.4 or later
 */

(function($){

    $.fn.collapsible = function(options){

        options                     = options || {}
        options.collapsed           = options.collapsed || false
        options.collapsed_label     = options.collapsed_label || 'Expand'
        options.expanded_label      = options.expanded_label || 'Collapse'
        options.collapsed_class     = options.collapsed_class || 'collapsed'
        options.expanded_class      = options.expanded_class || 'expanded'

        $(this).each(function(){
            var parent = this

            $(this).append(
                $('<a />', {
                    'html': options.expanded_label,
                    'class': options.expanded_class,
                    'click': function(){

                        if($(this).hasClass(options.expanded_class)){
                            collapse()
                        }else{
                            expand()
                        }   

                    }
                })
            )

            if(options.collapsed){
                collapse()
            }

            function collapse(){
                var button = $(parent).find('.' + options.expanded_class)

                $(parent).children().not(button).slideUp(100)
                $(button).removeClass(options.expanded_class)
                $(button).addClass(options.collapsed_class)
                $(button).text(options.collapsed_label)
            }

            function expand(){
                var button = $(parent).find('.' + options.collapsed_class)

                $(parent).children().not(button).slideDown(100)
                $(button).removeClass(options.collapsed_class)
                $(button).addClass(options.expanded_class)
                $(button).text(options.expanded_label)
            }

        })

    }

})(jQuery)