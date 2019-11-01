<!DOCTYPE html>

<html class="loading" lang="en" data-textdirection="ltr">

  <!-- BEGIN: Head-->
  <head>

    <?php
      include "app-includes/head/meta.php";
      include "app-includes/head/icons.php";
    ?>

    <title>iHome - Login</title>

    <?php
      include "app-includes/head/vendors.css.php";
      include "app-includes/head/theme.css.php";
    ?>

    <!-- BEGIN: Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/login.css">
    <!-- END: Page Level CSS-->

    <?php
      include "app-includes/head/custom.css.php";
    ?>

  </head>
  <!-- END: Head-->

  <body class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu 1-column login-bg  blank-page blank-page" data-open="click" data-menu="vertical-modern-menu" data-col="1-column">
    <div class="row">
      <div class="col s6">

      </div>
      <div class="col s6">
        <div class="container">
          <div id="login-page" class="row">
            <div class="z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
              <form class="login-form">
                <div class="row">
                  <div class="input-field col s12 login-title-header">
                    <img class="login-title-logo" src="http://www.mundialimoveis.com.br/img/site/logos/logo.svg" alt="Logo do cliente">
                    <h5 class="login-title-text">Entrar no <strong class="text-orange">iHome</strong></h5>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">person_outline</i>
                    <input id="username" type="text">
                    <label for="username" class="center-align">Usuário ou Email</label>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">lock_outline</i>
                    <input id="password" type="password">
                    <label for="password">Senha</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 m12 l12 ml-2 mt-1">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Lembrar-me</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 text-center" style="text-align: center">
                    <a href="home.php" class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange" >Entrar</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php
      include "app-includes/footer/vendor.js.php";
      include "app-includes/footer/scripts.js.php";
    ?>

    <script src="app-assets/js/plugins.js" type="text/javascript"></script>
    <script src="app-assets/js/custom/custom-script.js" type="text/javascript"></script>

  </body>
</html>