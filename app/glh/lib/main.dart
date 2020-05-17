import 'package:flutter/material.dart';
import 'package:glh/screens/consultancy_page.dart';
import 'package:glh/screens/forums_page.dart';
import 'package:glh/screens/home_screen.dart';
import 'package:glh/screens/question_card_search.dart';
import 'package:glh/screens/situation_model.dart';

import 'package:glh/screens/welcom_message_screen.dart';
import 'screens/login_signup_screen.dart';

void main() => runApp(glhApp());

class glhApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: LogInSignUpScreen.id,
      routes: {
        LogInSignUpScreen.id: (context) => LogInSignUpScreen(),
        WelcomeMessageScreen.id: (context) => WelcomeMessageScreen(),
        HomeScreen.id: (context) => HomeScreen(),
        QuestionCardSearch.id: (context) => QuestionCardSearch(),
        ForumsPage.id: (context) => ForumsPage(),
        SituationModel.id: (context) => SituationModel(),
        ConsultancyPage.id: (context) => ConsultancyPage()
      },
    );
  }
}
