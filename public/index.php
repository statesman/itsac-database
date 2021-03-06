<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <?php
      $meta = array(
        'title' => 'Search Texas government IT contractor spending',
        'description' => 'Our database uses sales reports made by vendors to the Department of Information Resources to show how much the government agencies have paid for specific contractors since the beginning of fiscal year 2010.',
        'thumbnail' => 'http://projects.statesman.com/news/itsac-database/assets/share.png',
        'url' => 'http://projects.statesman.com/news/itsac-database/',
        'twitter' => 'statesman'
      );
    ?>

    <title>Interactive: <?php print $meta['title']; ?> | Austin American-Statesman</title>
    <link rel="icon" type="image/png" href="//projects.statesman.com/common/favicon.ico">

    <link rel="canonical" href="<?php print $meta['url']; ?>" />

    <meta name="description" content="<?php print $meta['description']; ?>">

    <meta property="og:title" content="<?php print $meta['title']; ?>"/>
    <meta property="og:description" content="<?php print $meta['description']; ?>"/>
    <meta property="og:image" content="<?php print $meta['thumbnail']; ?>"/>
    <meta property="og:url" content="<?php print $meta['url']; ?>"/>

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@<?php print $meta['twitter']; ?>" />
    <meta name="twitter:title" content="<?php print $meta['title']; ?>" />
    <meta name="twitter:description" content="<?php print $meta['description']; ?>" />
    <meta name="twitter:creator:id" content="15464292" />
    <meta name="twitter:creator:id" content="16235644" />
    <meta name="twitter:image:src" content="<?php print $meta['thumbnail']; ?>" />
    <meta name="twitter:url" content="<?php print $meta['url']; ?>" />

    <link href="dist/style.css" rel="stylesheet">

    <link href='http://fonts.googleapis.com/css?family=Lusitana:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather+Sans:400,300,300italic,400italic,700italic,700,800,800italic' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php /* CMG advertising and analytics */ ?>
    <?php include "includes/advertising.inc";?>
    <?php include "includes/metrics-head.inc";?>
  </head>
  <body>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://www.statesman.com/" target="_blank">
            <img width="273" height="26" src="assets/logo.png" />
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right social hidden-xs">
          <li><a target="_blank" href="https://www.facebook.com/sharer.php?u=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-facebook-square"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo urlencode($meta['url']); ?>&via=<?php print urlencode($meta['twitter']); ?>&text=<?php print urlencode($meta['title']); ?>"><i class="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://plus.google.com/share?url=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-google-plus"></i></a></li>
        </ul>
      </div>
    </nav>

    <div id="spin" style="position:fixed;top:50%;left:50%;z-index:10000"></div>

    <article class="container">
      <div class="header">
        <h4>Texas state government</h4>
        <h1>Search Texas government IT contractor spending</h1>
        <p class="author">Interactive by <a href="http://www.mystatesman.com/staff/andrew-chavez/">Andrew Chavez</a>, <a href="http://www.mystatesman.com/staff/david-mcswane/">J. David McSwane</a> and <a href="http://www.mystatesman.com/staff/andrea-ball/">Andrea Ball</a>, American-Statesman</p>
        <p>An American-Statesman investigation has found that the state’s use of information technology contractors faces little to no oversight. Tens of millions have been paid to at least 3,000 contract workers working for 210 companies, all while avoiding competitive bidding and public scrutiny.</p>
        <p>Our database uses sales reports made by vendors to the Department of Information Resources to show how much the government agencies have paid for specific contractors since the beginning of fiscal year 2010.</p>
        <p><a href="http://projects.statesman.com/news/itsac-top-paid/">Related: See how costs for top contractors compare with top-paid state employees <i class="fa fa-angle-double-right"></i></a></p>
      </div>

      <div id="search" class="well well-lg">
        <div class="form-group">
          <div class="input-group">
            <input class="form-control input-lg" type="text" placeholder="Search by name, customer or vendor">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
          <p class="help-block"></p>
        </div>
      </div>

      <ul id="nav" class="nav nav-tabs nav-justified">
        <?php /*<li role="presentation" class="nav-home"><a href="#/"><i class="fa fa-home"></i> Home</a></li> */ ?>
        <li role="presentation" class="nav-browse"><a href="#/browse/page/1"><i class="fa fa-table"></i> Browse contractors</a></li>
        <li role="presentation" class="nav-search disabled"><a href="#"><i class="fa fa-search"></i> Search results</a></li>
        <li role="presentation" class="nav-detail disabled"><a href="#"><i class="fa fa-user"></i> Contractor details</a></li>
      </ul>

      <div class="row">
        <div class="col-xs-12" id="detail"></div>
        <div class="col-xs-12 col-sm-6" id="agency-top"></div>
        <div class="col-xs-12 col-sm-6" id="vendor-top"></div>
      </div>

      <div id="results"></div>

      <div id="browse"></div>
    </article>

    <div class="clearfix" id="ads">
      <div class="visible-xs hidden-sm hidden-md hidden-lg col-xs-12">
        <div id="div-gpt-ad-1403295829614-3" class="center-block" style="width:320px; height:50px;">
          <script type="text/javascript">
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-3'); });
          </script>
        </div>
      </div>
      <div class="hidden-xs visible-sm visible-md visible-lg col-xs-12">
        <div id="div-gpt-ad-1403295829614-1" class="center-block" style="width:728px; height:90px;">
          <script type="text/javascript">
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-1'); });
          </script>
        </div>
      </div>
    </div>

    <p id="legal" class="center-block text-center"><small>© <?php print date("Y"); ?> <a href="http://www.coxmediagroup.com" target="_blank">Cox Media Group</a>. By using this website, you accept the terms of our <a href="http://www.mystatesman.com/visitor_agreement/" target="_blank">Visitor Agreement</a> and <a target="_blank" href="http://www.mystatesman.com/privacy_policy/">Privacy Policy</a>, and understand your options regarding <a target="_blank" href="http://www.mystatesman.com/privacy_policy/#ad-choices">Ad Choices</a><img src="http://media.cmgdigital.com/shared/img/photos/2012/02/29/d3/da/ad_choices_logo.png" alt="AdChoices">.</small></p>

    <?php /* CMG advertising and analytics */ ?>
    <?php include "includes/project-metrics.inc"; ?>
    <?php include "includes/metrics.inc"; ?>

    <script src="dist/scripts.js"></script>

    <?php if($_SERVER['SERVER_NAME'] === 'localhost'): ?>
      <script src="//localhost:35729/livereload.js"></script>
    <?php endif; ?>
  </body>
</html>
