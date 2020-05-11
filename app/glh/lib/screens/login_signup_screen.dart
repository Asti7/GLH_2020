import 'package:flutter/material.dart';
import 'package:glh/components/rounded_button.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/welcom_message_screen.dart';

class LogInSignUpScreen extends StatelessWidget {
  static const String id = 'login_signup_screen';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color1,
      body: Padding(
        padding: EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Column(
              // crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Hero(
                  tag: 'logo',
                  child: Container(
                    child: Image.asset('images/logo.png'),
                    height: 100,
                  ),
                ),
                SizedBox(height: 100),
                RoundedButton(
                  title: 'Log In',
                  color: color2,
                  onPressed: () {},
                ),
                RoundedButton(
                  title: 'Sign Up',
                  color: color2,
                  onPressed: () {
                    Navigator.pushNamed(context, WelcomeMessageScreen.id );
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
