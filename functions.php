<?php
// require_once get_template_directory() . '/functions.php';
function add_theme_scripts() {
    wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/css/app.css', array(), '1.0', 'all');
    wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/js/app.js ', array(), '1.0', true);
    wp_enqueue_script( 'chunk', get_template_directory_uri() . '/dist/js/chunk-vendors.js ', array(), '1.0', true);
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

function custom_theme_setup() {
    register_nav_menu('primary', 'Primary Menu');
}
add_action('after_setup_theme', 'custom_theme_setup');
function display_custom_menu() {
    wp_nav_menu(array(
        'theme_location' => 'primary',
        'menu_class' => 'custom-menu-class',
        'container' => 'nav',
        'container_class' => 'custom-menu-container',
    ));
}

