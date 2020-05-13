// this widget is for the situations under a specifi category title
// for the situation cards page.

import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';

class Situations extends StatelessWidget {
  Situations({this.text,this.onPressed});

  final String text;
  final Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: onPressed,
      child: Card(
        elevation: 2,
        color: color7,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text('$text'),
        ),
      ),
    );
  }
}
