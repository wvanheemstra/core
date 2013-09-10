<div id="login" class="loginForm reveal-modal">
    <div class="loginMessage">[[+errors]]</div>
    <div class="loginLogin">
        <form class="loginLoginForm" action="[[~[[*id]]]]" method="post">
            <fieldset class="loginLoginFieldset">
                <legend class="loginLegend">[[+actionMsg]]</legend>
                <label class="loginUsernameLabel">[[%login.username? &namespace=`login`]]
                    <input class="loginUsername" type="text" name="username" />
                </label>
                <label class="loginPasswordLabel">[[%login.password]]
                    <input class="loginPassword" type="password" name="password" />
                </label>
	        <input class="contexts" type="hidden" name="contexts" value="[[++custom.context]]" />
	        <input class="returnUrl" type="hidden" name="returnUrl" value="[[+request_uri]]" />
                [[+login.recaptcha_html]]
                <input class="loginLoginValue" type="hidden" name="service" value="login" />
                <span class="loginLoginButton"><input type="submit" name="Login" class="nice small radius white button" value="[[+actionMsg]]" /></span>
            </fieldset>
        </form>
        <a href="[[~[[++custom.forgot_password]]]]">[[%custom.label_forgot_your_password? &namespace=`custom`]]</a>
    </div>
    <a class="close-reveal-modal">&#215;</a>
</div><!-- #login -->