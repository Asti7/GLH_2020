import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';
import 'package:glh/screens/situation_model4.dart';

class SituationModel3 extends StatelessWidget {
  static const String id = 'situation_model3';

  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
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
                    Navigator.pushNamed(context, SituationModel4.id);
                  },
                  delayAmountTime: 2,
                  text:
                      '1. The first thing that you should be aware of is that you cannot be evicted between 29 March and 26 September 2020 for arrears.',
                ),
                SizedBox(height: 40),
                CardComponent(
                  color: color7,
                  onPressed: null,
                  delayAmountTime: 3,
                  text:
                      '2. The second is that the landlord is not allowed to increase the rent for six months from 29 March 2020. ',
                ),
                SizedBox(height: 40),
                CardComponent(
                  color: color7,
                  onPressed: null,
                  delayAmountTime: 4,
                  text:
                      '3. The landlord must not list you on a residential tenancy database (blacklist) if you are unable to pay rent because of coronavirus.',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
