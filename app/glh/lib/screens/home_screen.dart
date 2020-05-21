import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/consultancy_page.dart';
import 'package:glh/screens/forums_page.dart';
import 'package:glh/screens/login_signup_screen.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/welcom_message_screen.dart';

class HomeScreen extends StatefulWidget {
  static const String id = 'home_screen';

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Widget> pages = [QuestionCardPage(), ForumsPage(), ConsultancyPage()];
  Widget page = QuestionCardPage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color7,
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
                color: color7,
                borderRadius: BorderRadius.all(
                  Radius.circular(50.0),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey,
                    offset: Offset(2.0, 2.0), //(x,y)
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
                    onPressed: () {
                      setState(() {
                        page = pages[0];
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.forum),
                    onPressed: () {
                      setState(() {
                        page = pages[1];
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.message),
                    onPressed: () {
                      setState(() {
                        page = pages[2];
                      });
                    },
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
