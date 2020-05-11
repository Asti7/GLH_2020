import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/login_signup_screen.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/welcom_message_screen.dart';

class HomeScreen extends StatefulWidget {
  static const String id = 'home_screen';

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Widget> pages = [];
  Widget page = QuestionCardPage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color1,
      body: Padding(
        padding: const EdgeInsets.fromLTRB(18, 48, 18, 24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Expanded(child: page),
            SizedBox(height: 20),
            Container(
              decoration: BoxDecoration(
                color: color5,
                borderRadius: BorderRadius.all(
                  Radius.circular(20.0),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black,
                    offset: Offset(0.0, 1.0), //(x,y)
                    blurRadius: 6.0,
                  ),
                ],
              ),
              height: 70,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  IconButton(
                    icon: Icon(Icons.home),
                    onPressed: () {},
                    splashColor: null,
                  ),
                  IconButton(
                    icon: Icon(Icons.forum),
                    onPressed: () {},
                  ),
                  IconButton(
                    icon: Icon(Icons.message),
                    onPressed: () {},
                  ),
                  IconButton(
                    icon: Icon(Icons.account_circle),
                    onPressed: () {},
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
