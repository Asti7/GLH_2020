import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';

class SituationModel6 extends StatelessWidget {
  static const String id = 'situation_model6';

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
                  onPressed: null,
                  delayAmountTime: 2,
                  text: '- Registered a revised rental agreement with Consumer Affairs Victoria\n\n'
                  '- Have less than AUD 5,000 in savings(excluding superannuation)\n\n'
                  '- Have an income of less than AUD 1,903 perweek before tax\n\n'
                  '- Be paying more than 30% of your income in rent'
                ),
                
                
              ],
            ),
          ),
        ),
      ),
    );
  }
}
