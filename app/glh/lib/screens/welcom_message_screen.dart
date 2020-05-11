import 'dart:async';

import 'package:flutter/material.dart';
import 'package:glh/components/rounded_button.dart';
import 'package:glh/constants/constants.dart';

class WelcomeMessageScreen extends StatelessWidget {
  static const String id = 'welcome_message_screen';

  @override
  Widget build(BuildContext context) {
    int delayAmount = 500;

    return Scaffold(
      backgroundColor: color1,
      body: Padding(
        padding: EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: Text("Hi,",
                    style: TextStyle(
                      fontSize: 30.0,
                      color: color3,
                    )),
              ),
              delay: delayAmount,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: Text("Welcome to Legality !",
                    style: TextStyle(
                      fontSize: 30.0,
                      color: color3,
                    )),
              ),
              delay: delayAmount * 2,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: Text("Your legal query app.",
                    style: TextStyle(
                      fontSize: 30.0,
                      color: color3,
                    )),
              ),
              delay: delayAmount * 3,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: Hero(
                  tag: 'logo',
                  child: Container(
                    child: Image.asset('images/logo.png', color: color3),
                    height: 50,
                  ),
                ),
              ),
              delay: delayAmount * 4,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: RichText(
                  text: TextSpan(
                      style: TextStyle(
                        fontSize: 25.0,
                        color: color3,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                            text:
                                "You can view short legal info in the form of "),
                        TextSpan(
                          text: "Question cards",
                          style: TextStyle(color: Color(0xffe43f5a)),
                        )
                      ]),
                ),
              ),
              delay: delayAmount * 5,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: RichText(
                  text: TextSpan(
                      style: TextStyle(
                        fontSize: 25.0,
                        color: color3,
                      ),
                      children: <TextSpan>[
                        TextSpan(
                            text: "or ask a question on the Legality app "),
                        TextSpan(
                            text: "forum",
                            style: TextStyle(color: Color(0xffef962d)))
                      ]),
                ),
              ),
              delay: delayAmount * 6,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: RichText(
                  text: TextSpan(
                      style: TextStyle(
                        fontSize: 25.0,
                        color: color3,
                      ),
                      children: <TextSpan>[
                        TextSpan(text: "or directly connect with a "),
                        TextSpan(
                            text: "Legal professionals",
                            style: TextStyle(color: Color(0xff639a67)))
                      ]),
                ),
              ),
              delay: delayAmount * 7,
            ),
            ShowUp(
              child: Padding(
                padding: EdgeInsets.only(bottom: 8.0),
                child: RoundedButton(
                  title: 'continue',
                  color: color2,
                  onPressed: () {

                  },
                ),
              ),
              delay: delayAmount * 8,
            ),
          ],
        ),
      ),
    );
  }
}

class ShowUp extends StatefulWidget {
  final Widget child;
  final int delay;

  ShowUp({@required this.child, this.delay});

  @override
  _ShowUpState createState() => _ShowUpState();
}

class _ShowUpState extends State<ShowUp> with TickerProviderStateMixin {
  AnimationController _animController;
  Animation<Offset> _animOffset;

  @override
  void initState() {
    super.initState();

    _animController =
        AnimationController(vsync: this, duration: Duration(milliseconds: 500));
    final curve =
        CurvedAnimation(curve: Curves.decelerate, parent: _animController);
    _animOffset =
        Tween<Offset>(begin: const Offset(0.0, 0.35), end: Offset.zero)
            .animate(curve);

    if (widget.delay == null) {
      _animController.forward();
    } else {
      Timer(Duration(milliseconds: widget.delay), () {
        _animController.forward();
      });
    }
  }

  @override
  void dispose() {
    super.dispose();
    _animController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      child: SlideTransition(
        position: _animOffset,
        child: widget.child,
      ),
      opacity: _animController,
    );
  }
}
