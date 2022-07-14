<?php
/**
 * Plugin Name: carrousel
 * Plugin URI: http://wordpress.org/plugins/carrousel/
 * Description: 
 * Author: Pauline Huby
 * Author URI: https://paulinehub.github.io/cours-wordpress-ete22-extension-tp1/tree/tp1
 */

function carrousel_31w_enqueue()
{
   $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
   $version_js = filemtime(plugin_dir_path(__FILE__) . "script/carrousel.js");

   wp_enqueue_style('carrousel_31w_css', plugin_dir_url(__FILE__) . "/style.css", array(), $version_css);
   wp_enqueue_script('carrousel_31w_js', plugin_dir_url(__FILE__) .  "script/carrousel.js", array(), $version_js, true);
}

add_action('wp_enqueue_scripts', 'carrousel_31w_enqueue');

function genere_carrousel()
{
   ///////////////////////////////////// HTML
   $contenu = "<div class='carrousel '>";
   $contenu .= "<button class='carrousel__fermeture'>X</button>";
   $contenu .= "<figure class='carrousel__figure'></figure>";
   $contenu .= "<form class='carrousel__radio'></form>";
   $contenu .= "</div> <!-- FIN CARROUSEL -->";

   return $contenu;
}

add_shortcode('carrouseltp1', 'genere_carrousel');