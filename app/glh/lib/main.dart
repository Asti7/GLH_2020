import 'package:flutter/material.dart';
import 'screens/login_signup_screen.dart';

void main() => runApp(glhApp());

class glhApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: LogInSignUpScreen.id,
      routes: {
        LogInSignUpScreen.id: (context) => LogInSignUpScreen()
      },
      
    );
  }
}
