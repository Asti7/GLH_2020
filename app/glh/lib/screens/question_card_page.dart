import 'dart:async';

import 'package:flappy_search_bar/flappy_search_bar.dart';
import 'package:flutter/material.dart';
import 'package:glh/components/category_section.dart';
import 'package:glh/components/category_section_situations.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_search.dart';
import 'package:glh/screens/situation_model.dart';

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
      floatingActionButton: ShowUp(
        delay: delayAmount * 4,
        child: Container(
          height: 40.0,
          width: 40.0,
          child: FittedBox(
            child: FloatingActionButton(
              backgroundColor: color8,
              onPressed: () {
                Navigator.pushNamed(context, QuestionCardSearch.id);
              },
              child: Icon(Icons.search),
            ),
          ),
        ),
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          color: color7,
        ),
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Situation cards',
                  style: TextStyle(color: color8, fontSize: 30),
                ),
                SizedBox(
                  height: 50,
                ),
                ShowUp(
                  child: Text(
                    'Choose a topic...',
                    style: TextStyle(color: color8, fontSize: 21),
                  ),
                  delay: delayAmount * 2,
                ),
                SizedBox(
                  height: 50,
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'COVID-19',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                        onPressed: () {
                          Navigator.push(
                              context, FadeRoute(page: SituationModel()));
                        },
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Property',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Criminal',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Civil',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Financial',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Intellectual Property',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Terrorism',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
                ShowUp(
                  delay: delayAmount * 3,
                  child: CatergorySection(
                    categoryTitle: 'Martial',
                    situations: <Widget>[
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                      Situations(
                        text: 'Rights and obligations\n'
                            'as a residential tenant',
                      ),
                    ],
                  ),
                ),
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

class FadeRoute extends PageRouteBuilder {
  final Widget page;
  FadeRoute({this.page})
      : super(
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              page,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              FadeTransition(
                opacity: animation,
                child: child,
              ),
        );
}
