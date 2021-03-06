import 'package:flutter/material.dart';
import 'package:glh/components/rounded_button.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/welcom_message_screen.dart';

class LogInSignUpScreen extends StatelessWidget {
  static const String id = 'login_signup_screen';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color7,
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
                SizedBox(height: 20),
                Text(
                  'Legality',
                  style: TextStyle(
                    fontSize: 30.0,
                    color: color8,
                  ),
                ),
                SizedBox(height: 50),
                RoundedButton(
                  title: 'Log In',
                  color: color8,
                  onPressed: () {},
                ),
                RoundedButton(
                  title: 'Sign Up',
                  color: color8,
                  onPressed: () {
                    Navigator.pushNamed(context, WelcomeMessageScreen.id);
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
