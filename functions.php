<?php
function theme_enqueue_styles() {
    wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/style.css', [], null, 'all' );
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/bundle.js', [], null, true );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

