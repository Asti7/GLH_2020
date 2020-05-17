import 'package:flutter/material.dart';
import 'package:glh/screens/question_card_page.dart';

class CardComponent extends StatelessWidget {
  CardComponent({this.text, this.delayAmountTime,this.onPressed});

  final String text;
  final int delayAmountTime;
  final Function onPressed;

  var delayAmount = 500;
  @override
  Widget build(BuildContext context) {
    return ShowUp(
      delay: delayAmount * delayAmountTime,
      child: MaterialButton(
        onPressed: onPressed,
              child: Card(
          elevation: 5,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              text,
              style: TextStyle(fontSize: 20),
            ),
          ),
        ),
      ),
    );
  }
}
