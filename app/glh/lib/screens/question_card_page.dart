import 'dart:async';

import 'package:flappy_search_bar/flappy_search_bar.dart';
import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_search.dart';

class QuestionCardPage extends StatefulWidget {
  static const String id = 'question_card_page';
  @override
  _QuestionCardPageState createState() => _QuestionCardPageState();
}

class _QuestionCardPageState extends State<QuestionCardPage> {
  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
    return Scaffold(
      floatingActionButton: Container(
        height: 40.0,
        width: 40.0,
        child: FittedBox(
          child: FloatingActionButton(onPressed: () {
            Navigator.pushNamed(context, QuestionCardSearch.id);
          },
          child: Icon(Icons.search),
          ),
        ),
      ),
          body: Container(
        decoration: BoxDecoration(
          color: Colors.white,
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
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Question cards',
                  style: TextStyle(color: Color(0xffe43f5a), fontSize: 21),
                ),
                SizedBox(
                  height: 40,
                ),
                ShowUp(
                  child: Text(
                    'Choose a topic...',
                    style: TextStyle(color: Color(0xffe43f5a), fontSize: 21),
                  ),
                  delay: delayAmount * 2,
                ),
                SizedBox(
                  height: 40,
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: Column(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                          Expanded(
                            child: Card(
                              elevation: 10,
                              child: Container(height: 90, color: Colors.red),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
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
