<!-- wp-content/themes/your-theme-name/index.php -->
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<?php get_header(); ?>
  <div id="app"></div>
  <script src="<?php echo get_template_directory_uri(); ?>/dist/bundle.js"></script>
  <?php wp_footer(); ?>
</body>
</html>
