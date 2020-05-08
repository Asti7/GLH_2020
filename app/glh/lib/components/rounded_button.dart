
import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';


class RoundedButton extends StatelessWidget {
  RoundedButton({this.title, this.color, this.onPressed});

  final String title;
  final Color color;
  final Function onPressed;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: Material(
        elevation: 10.0,
        color: color,
        borderRadius: BorderRadius.circular(30.0),
        child: MaterialButton(
          onPressed: onPressed,
          minWidth: 200.0,
          height: 62.0,
          child: Text(
            title,
            style: TextStyle(
              color: color5,
              fontSize: 16
            ),
            
          ),
        ),
      ),
    );
  }
}