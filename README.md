# jQuery Collapsible Plugin

## About

Collapsible is a jQuery plugin that makes it ridiculously easy to collaps and expand elements.

## Usage

    <!DOCTYPE html>

    <html>

        <head>

            <script src="path/to/jquery.js"></script>
            <script src="path/to/jquery.collapsible.js"></script>

            <script>

                $(document).ready(function(){

                    // Make the children of the '#items' element collapsible
                    $('#items').collapsible({
                        collapsed: true,
                        labels: {
                            collapsed: 'Expand',
                            expanded: 'Collapse'
                        },
                        classes: {
                            collapsed: 'collapsed',
                            expanded: 'expanded'
                        }
                    })

                })

            </script>

        </head>

        <body>

            <section id="items">

                <div class="item">
                    <h1>...</h1>
                    <p>...</p>
                </div>

                <div class="item">
                    <h1>...</h1>
                    <p>...</p>
                </div>

            </section>

        </body>

    </html>
