# jQuery Collapsible Plugin

## About

Collapsible is a jQuery plugin that facilitates for collapsing and expanding items.

## Usage

    <!DOCTYPE html>
    
    <html>
    
        <head>
    
            <script src="path/to/jquery.js"></script>
            <script src="path/to/jquery.collapsible.js"></script>

            <script>

                $(document).ready(function(){
        
                    // Make the children of the '#items' element collapsible
                    $('#items').collapsible()
        
                })

            </script>
            
        </head>
    
        <body>
        
            <section id="items">
            
                <div class="item">
                    <h1>...</h1>
                    <p>...</p>
                </div>
                
                <div class="item"
                    <h1>...</h1>
                    <p>...</p>
                </div>
            
            </section>
        
        </body>
        
    </html>
    
## Options

The `collapsible` function accepts an object with the following properties:

    Property            Description                                                                     Default
    
    collapsed           A boolean describing whether or not the items will be collapsed by default      false
    collapsed_label     A string describing the label of the "expand" button                            'Expand'
    collapsed_class     A string describing the class of the "expand" button                            'collapsed'
    expanded_label      A string describing the label of the "collapse" button                          'Collapse'
    expanded_class      A string describing the class of the "collapse" button                          'expanded'
