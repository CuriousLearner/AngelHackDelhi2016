var visualTemplate=$('#visual-template').html();
var message = [];
var k_score = 0;
var k_retweet = 0;
var k_favorites = 0;
var k_follower = 0;
var myImpact;
var myRT;
var myFav;
var myFollow;
var config0;
var config1;
var config2;
var config3;
var gauge1;
var gauge2;
var gauge3;
var gauge4;
function D3init(myImpact,myRT,myFav,myFollow){
config0 = liquidFillGaugeDefaultSettings();
  config0.textVertPosition = 0.8;
  config0.waveAnimateTime = 5000;
  config0.waveHeight = 0.15;
  config0.waveOffset = 0.25;
  config0.valueCountUp = false;
  config0.displayPercent = false;
  config0.waveAnimateTime = 1000;
  config0.maxValue=100;
gauge1 = loadLiquidFillGauge("fillgauge1", myImpact, config0);
config1 = liquidFillGaugeDefaultSettings();
  config1.textVertPosition = 0.8;
  config1.waveAnimateTime = 5000;
  config1.waveHeight = 0.15;
  config1.waveOffset = 0.25;
  config1.valueCountUp = false;
  config1.displayPercent = false;
  config1.waveAnimateTime = 1000;
  config1.maxValue=10000;
gauge2 = loadLiquidFillGauge("fillgauge2", myRT, config1);
config2 = liquidFillGaugeDefaultSettings();
  config2.textVertPosition = 0.8;
  config2.waveAnimateTime = 5000;
  config2.waveHeight = 0.15;
  config2.waveOffset = 0.25;
  config2.valueCountUp = false;
  config2.displayPercent = false;
  config2.waveAnimateTime = 1000;
  config2.maxValue=1000;
gauge3 = loadLiquidFillGauge("fillgauge3", myFav, config2);
config3 = liquidFillGaugeDefaultSettings();
  config3.textVertPosition = 0.8;
  config3.waveAnimateTime = 5000;
  config3.waveHeight = 0.15;
  config3.waveOffset = 0.25;
  config3.valueCountUp = false;
  config3.displayPercent = false;
  config3.waveAnimateTime = 1000;
  config3.maxValue=1000;
gauge4 = loadLiquidFillGauge("fillgauge4", myFollow, config3);
}
function NewValueImpactScore() {

    var max_impact_score = 100;
    var min_impact_score = 0;
    var total_impact_score = 0;
    $.each(message, function(i, e) {
      if (max_impact_score < message[i].impact_score) {
          max_impact_score = message[i].impact_score;
          config0.maxValue = max_impact_score * 1.1;
      }
      if (min_impact_score > message[i].impact_score) {
          min_impact_score = message[i].impact_score;
          config0.minValue = min_impact_score;
      }
      total_impact_score = total_impact_score + message[i].impact_score;
    });
    var avg_impact_score = total_impact_score / message.length;
    if (k_score == 0) {
        k_score++;
        document.getElementById("score_title").innerHTML = "Minimum Score"
        return min_impact_score;
    } else if (k_score == 1) {
        k_score++;
        document.getElementById("score_title").innerHTML = "Maximum Score"
        return max_impact_score;
    } else if (k_score == 2) {
        k_score++;
        document.getElementById("score_title").innerHTML = "Average Score"
        return avg_impact_score;
    } else if(k_score == 3){
        k_score=0;
        document.getElementById("score_title").innerHTML = "Your Score"
        return myImpact;
    }

}

function NewValueRetweet() {

    var max_retweet = 0;
    var min_retweet = 50000;
    var total_retweet = 0;
    $.each(message, function(i, e) {
      if (max_retweet < message[i].total_retweet_count) {
          max_retweet = message[i].total_retweet_count;
          config1.maxValue = max_retweet * 1.1;
      }
      if (min_retweet > message[i].total_retweet_count) {
          min_retweet = message[i].total_retweet_count;
          config1.minValue = min_retweet;
      }
      total_retweet = total_retweet + message[i].total_retweet_count;
    });
    var avg_retweet = total_retweet / message.length;
    if (k_retweet == 0) {
        k_retweet++;
        document.getElementById("retweet_title").innerHTML = "Minimum Retweets"
        return min_retweet;
    } else if (k_retweet == 1) {
        k_retweet++;
        document.getElementById("retweet_title").innerHTML = "Maximum Retweets"
        return max_retweet;
    } else if (k_retweet == 2) {
        k_retweet++;
        document.getElementById("retweet_title").innerHTML = "Average Retweets"
        return Math.round(avg_retweet);
    } else if(k_retweet == 3){
        k_retweet=0;
        document.getElementById("retweet_title").innerHTML = "Your Retweets"
        return myRT;
    }

}

//total favorites

function NewValueFavorite() {

    var max_favorites = 0;
    var min_favorites = 100;
    var total_favorites = 0;
    $.each(message, function(i, e) {
      if (max_favorites < message[i].total_fav_count) {
          max_favorites = message[i].total_fav_count;
          config2.maxValue = max_favorites * 1.1;
      }
      if (min_favorites > message[i].total_fav_count) {
          min_favorites = message[i].total_fav_count;
          config2.minValue = min_favorites;
      }
      total_favorites = total_favorites + message[i].total_fav_count;
    });
    var avg_favorites = total_favorites / message.length;
    if (k_favorites == 0) {
        k_favorites++;
        document.getElementById("favorites_title").innerHTML = "Minimum Favorites"
        return min_favorites;
    } else if (k_favorites == 1) {
        k_favorites++;
        document.getElementById("favorites_title").innerHTML = "Maximum Favorites"
        return max_favorites;
    } else if (k_favorites == 2) {
        k_favorites++;
        document.getElementById("favorites_title").innerHTML = "Average Favorites"
        return Math.round(avg_favorites);
    } else if(k_favorites == 3){
        k_favorites=0;
        document.getElementById("favorites_title").innerHTML = "Your Favorites"
        return myFav;
    }

}

function NewValueFollower() {

    var max_follower = 0;
    var min_follower = 100;
    var total_follower = 0;
    $.each(message, function(i, e) {
      if (max_follower < message[i].follower_count) {
          max_follower = message[i].follower_count;
          config3.maxValue = max_follower * 1.1;
      }
      if (min_follower > message[i].follower_count) {
          min_follower = message[i].follower_count;
          config3.minValue = min_follower;
      }
      total_follower = total_follower + message[i].follower_count;
    });
    var avg_follower = total_follower / message.length;
    if (k_follower == 0) {
        k_follower++;
        document.getElementById("follower_title").innerHTML = "Minimum Followers"
        return min_follower;
    } else if (k_follower == 1) {
        k_follower++;
        document.getElementById("follower_title").innerHTML = "Maximum Followers"
        return max_follower;
    } else if (k_follower == 2) {
        k_follower++;
        document.getElementById("follower_title").innerHTML = "Average Followers"
        return Math.round(avg_follower);
    } else if(k_follower == 3){
        k_follower=0;
        document.getElementById("follower_title").innerHTML = "Your Followers"
        return myFollow;
    }

}

var cardTemplate = $("#card-template").html();

$(document).ready(function() {
    $('.visual').hide();
    $('.visual-down').hide();
    $('.back').hide();
    $('.dynamic').hide();
    $('.visual-up').hide();
    $('.heading').fadeIn('slow');
    $('.error').empty();
    $(document.body).on('click', '.back',
        function() {
            $('.visual').hide();
            $('.back').hide();
            $('.dynamic').hide();
            $('.heading').fadeIn('slow');
            $('.form-wrapper').fadeIn('slow');
            $('.visual-down').hide();
            $('.visual-up').hide();
            $('.error').empty();
            $('.heading').removeClass('heading-hide');
        });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.visual').hide();
            $('.back').hide();
            $('.dynamic').hide();
            $('.heading').fadeIn('slow');
            $('.form-wrapper').fadeIn('slow');
            $('.visual-down').hide();
            $('.visual-up').hide();
            $('#handle').val('');
            $('.error').empty();
            $('.heading').removeClass('heading-hide');
        }
    });
    $(document.body).on('click', '.visual-down',
        function() {
            $('.visual').slideDown('slow');
            $('.back').slideDown('slow');
            $('.visual-up').slideDown('slow');
            $('.dynamic').hide();
            $('.form-wrapper').hide();
            $('.visual-down').hide();
            $('.heading').hide();
        });
    $(document.body).on('click', '.visual-up',
        function() {
            $('.visual').hide();
            $('.back').show();
            $('.dynamic').show();
            $('.heading').show();
            $('.visual-down').show();
            $('.form-wrapper').hide();
            $('.visual-up').hide();
        });
    $('#handle').keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            var text = $(this).val().trim().toLowerCase();
            $(this).val('');
            if(text!=''){
              requestData(text);
              $('.error').empty();
              $('#handleSubmit').addClass('loadingGif');
            }else{
              $('.error').empty();
              $('<h2 class="red text-center">Please enter a username</h2>').appendTo('.error');
            }
        }
    });
    $('#handleSubmit').click(function() {
        var text = $('#handle').val().trim().toLowerCase();
        $('#handle').val('');
        if(text!=''){
          requestData(text);
          $('.error').empty();
          $('#handleSubmit').addClass('loadingGif');
        }else{
          $('.error').empty();
          $('<h2 class="red text-center">Please enter a username</h2>').appendTo('.error');
        }
    });

    function requestData(handlename) {
        var request = $.ajax({
            url: "/getimpact/"+handlename+"/",
            method: "GET",
            dataType: "json"
        });
        request.done(function(msg) {
            if (msg.length == 0) {
                $('<h2 class="red text-center">User not found</h2>').appendTo('.error');
                $('#handleSubmit').removeClass('loadingGif');
            } else {
                message=msg;
                $('.error').empty();
                handleSearch(msg,handlename);
                $('#handleSubmit').removeClass('loadingGif');
            }
        });
        request.fail(function(jqXHR, textStatus) {
            $('<h2 class="red text-center">User not found</h2>').appendTo('.error');
            console.log("Request failed: " + textStatus);
            $('#handleSubmit').removeClass('loadingGif');
        });
    }
    function handleSearch(msg, handlename) {
        k_score = 0;
        k_retweet = 0;
        k_favorites = 0;
        k_follower = 0;
        $('.dynamic').empty();
        $('.visual').empty();
        $('.dynamic').show();
        $('.form-wrapper').hide();
        $('.visual-up').hide();
        $.each(msg, function(i, e) {
            var totallength=msg.length;
            if (msg[i].twitter_username == handlename) {
                myImpact=parseFloat(msg[i].impact_score).toFixed(4);
                myRT=msg[i].total_retweet_count;
                myFav=msg[i].total_fav_count;
                myFollow=msg[i].follower_count;
                var profileimage=msg[i].profile_image_url.replace('_normal','');
                var adddata = cardTemplate.replace('userhandle">', 'userhandle">' + msg[i].twitter_username);
                adddata = adddata.replace('location">', 'location">' + msg[i].location);
                adddata = adddata.replace('userrank">','userrank">'+msg[i].rank+'/'+totallength);
                adddata = adddata.replace('impactScore">', 'impactScore">' + parseFloat(msg[i].impact_score).toFixed(4));
                adddata = adddata.replace('favorites">', 'favorites">' + msg[i].total_fav_count);
                adddata = adddata.replace('rts">', 'rts">' + msg[i].total_retweet_count);
                adddata = adddata.replace('followers">', 'followers">' + msg[i].follower_count);
                adddata = adddata.replace('src="','src="'+profileimage);
                $(adddata).appendTo('.dynamic');
                $('.back').show();
                $('.visual-down').show();
                $('.heading').addClass('heading-hide');
                $(visualTemplate).appendTo('.visual');
                D3init(myImpact,myRT,myFav,myFollow);
            }
        });
    }
});
