import 'package:flutter/material.dart';
import 'package:glh/screens/consultancy_page.dart';
import 'package:glh/screens/forums_page.dart';
import 'package:glh/screens/home_screen.dart';
import 'package:glh/screens/question_card_search.dart';
import 'package:glh/screens/situation_model0.dart';
import 'package:glh/screens/situation_model1.dart';
import 'package:glh/screens/situation_model2.dart';
import 'package:glh/screens/situation_model3.dart';
import 'package:glh/screens/situation_model4.dart';
import 'package:glh/screens/situation_model5.dart';
import 'package:glh/screens/situation_model6.dart';
import 'package:glh/screens/situation_model7.dart';

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

        ConsultancyPage.id: (context) => ConsultancyPage(),
        SituationModel0.id: (context) => SituationModel0(),
        SituationModel1.id: (context) => SituationModel1(),
        SituationModel2.id: (context) => SituationModel2(),
        SituationModel3.id: (context) => SituationModel3(),
        SituationModel4.id: (context) => SituationModel4(),
        SituationModel5.id: (context) => SituationModel5(),
        SituationModel6.id: (context) => SituationModel6(),
        SituationModel7.id: (context) => SituationModel7(),






        




      },
    );
  }
}
