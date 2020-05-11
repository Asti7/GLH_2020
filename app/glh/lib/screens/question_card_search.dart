import 'package:flappy_search_bar/flappy_search_bar.dart';
import 'package:flutter/material.dart';

class QuestionCardSearch extends StatefulWidget {
  static const String id = 'question_card_search';
  @override
  _QuestionCardSearchState createState() => _QuestionCardSearchState();
}

class _QuestionCardSearchState extends State<QuestionCardSearch> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(48.0),
        child: SearchBar(),
      ),
    );
  }
}