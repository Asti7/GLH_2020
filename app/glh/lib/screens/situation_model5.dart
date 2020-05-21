import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';
import 'package:glh/screens/situation_model6.dart';

class SituationModel5 extends StatelessWidget {
  static const String id = 'situation_model5';

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      backgroundColor: color7,
      appBar: AppBar(backgroundColor: color8, title: Text('Situation Cards')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: SingleChildScrollView(
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                CardComponent(
                  color: color9,
                  onPressed: (){
                    Navigator.pushNamed(context, SituationModel6.id);
                  },
                  delayAmountTime: 2,
                  text: 'Yes - Check eligibility for the Rent relief grant',
                ),
                SizedBox(height: 40),
                CardComponent(
                  color: color9,
                  onPressed: null,
                  delayAmountTime: 3,
                  text: 'NO',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
