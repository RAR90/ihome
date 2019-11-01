<!DOCTYPE html>
<html class="loading" lang="pt-Br" data-textdirection="ltr">

  <!-- BEGIN: Head-->
  <head>

    <?php
      include "app-includes/head/meta.php";
      include "app-includes/head/icons.php";
    ?>

    <title>iHome - Página principal</title>

    <?php
      include "app-includes/head/vendors.css.php";
    ?>

    <!-- BEGIN: PAGE VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/animate-css/animate.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/chartist-js/chartist.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/chartist-js/chartist-plugin-tooltip.css">
    <!-- END: PAGE VENDOR CSS-->

    <?php
      include "app-includes/head/theme.css.php";
    ?>

    <!-- BEGIN: Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/home.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/app-todo.css">
    <!-- END: Page Level CSS-->

    <?php
      include "app-includes/head/custom.css.php";
    ?>

  </head>
  <!-- END: Head-->

  <body
    class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu 2-columns"
    data-open="click"
    data-menu="vertical-modern-menu"
    data-col="2-columns"
  >

    <?php
      include "app-includes/menus/header.php";
      include "app-includes/menus/aside.php";
    ?>

    <!-- BEGIN: Page Main-->
    <div id="main">
      <div class="row">

        <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>

        <div class="breadcrumbs-dark pb-0 pt-2" id="breadcrumbs-wrapper">
          <!-- Search for small screen-->
          <div class="container">
            <div class="row">
              <div class="col s10 m6 l6">
                <h3 class="breadcrumbs-title mt-0 mb-0">Ficha do Imóvel</h3>
                <ol class="breadcrumbs mb-0">
                  <li class="breadcrumb-item"><a href="home.php">Home</a>
                  </li>
                  <li class="breadcrumb-item"><a href="#">Imóveis</a>
                  </li>
                  <li class="breadcrumb-item active">Ficha do Imóvel
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12">

          <div class="container">
            <div class="row">

              <!-- Conteúdo -->
              <div class="card card-inside-page border-radius-6">
                <div class="card-content">
                  <p class="caption">Exemplo de área</p>
                </div>
              </div>
              <!-- /Conteúdo -->

            </div>
          </div>

          <?php
            include "app-includes/menus/aside-right.php";
          ?>

        </div>

      </div>
    </div>
    <!-- END: Page Main-->


    <?php
      include "app-includes/footer/credits.php";
      include "app-includes/theme-customizer/frame.php";
      include "app-includes/footer/vendor.js.php";
    ?>



    <!-- BEGIN PAGE VENDOR JS-->
    <script src="app-assets/vendors/chartjs/chart.min.js" type="text/javascript"></script>
    <script src="app-assets/vendors/chartist-js/chartist.min.js" type="text/javascript"></script>
    <script src="app-assets/vendors/chartist-js/chartist-plugin-tooltip.js" type="text/javascript"></script>
    <script src="app-assets/vendors/chartist-js/chartist-plugin-fill-donut.min.js" type="text/javascript"></script>
    <script src="app-assets/vendors/sparkline/jquery.sparkline.min.js" type="text/javascript"></script>
    <script src="app-assets/vendors/sortable/jquery-sortable-min.js"></script>

    <!-- END PAGE VENDOR JS-->

    <?php
      include "app-includes/footer/theme.js.php";
      include "app-includes/footer/scripts.js.php";
    ?>

    <!-- BEGIN PAGE LEVEL JS-->
    <script src="app-assets/js/scripts/home.js" type="text/javascript"></script>

    <script src="app-assets/js/scripts/app-todo.js" type="text/javascript"></script>
    <!-- END PAGE LEVEL JS-->

  </body>
</html>