<?php
// require_once get_template_directory() . '/functions.php';
function add_theme_scripts() {
    wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/css/app.css', array(), '1.0', 'all');
    wp_enqueue_script( 'app', get_template_directory_uri() . '/dist/js/app.js ', array(), '1.0', true);
    wp_enqueue_script( 'chunk', get_template_directory_uri() . '/dist/js/chunk-vendors.js ', array(), '1.0', true);
    wp_enqueue_style( 'font-awesome', 'https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css', array(), '6.0.0-beta3', 'all' );
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap', array(), null );
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
