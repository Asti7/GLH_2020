import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';

class ForumComment extends StatelessWidget {
  static const String id = 'forum_comment';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color7,
      appBar: AppBar(
        backgroundColor: color8,
      ),
      body: Padding(
        padding: const EdgeInsets.all(28.0),
        child: SingleChildScrollView(
                  child: Column(
            children: <Widget>[
              Card(
                elevation: 5,
                color: color9,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      'I have been terminated from my job without any warning for no apparent reason. Can my employer do this??'),
                ),
              ),
              Card(
                color: color7,
                elevation: 5,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          CircleAvatar(
                            backgroundImage:
                                AssetImage('images/HarveySpecter.jpeg'),
                          ),
                          SizedBox(width: 10),
                          Text('Harvey Specter')
                        ],
                      ),
                      SizedBox(height: 10),
                      Text(
                          'Hi Anmol, I am sorry to hear that you have been terminated. Regardless of whether you were terminated for a fair reason, you must have been done so with a fair procedure. This refers to the termination meeting, support person(s) or a proper investigation. Generally, terminations in an argument without any warning or meeting is considered unfair. You can make an unfair dismissal under s294 of the Fair Work Act. The first step will be a conciliation to try and settle the matter. If the matter does not settle, then it will proceed to a court case. I should warn you, the FWC’s stats indicate that only 18% of employees win at this stage. If you wish to proceed, you can either contact a lawyer or commence proceedings yourself by filing an F2 form with the FWC. I offer these services if you wish to hear more.'),
                    ],
                  ),
                ),
              ),
              Card(
                color: color7,
                elevation: 5,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          CircleAvatar(
                            backgroundImage:
                                AssetImage('images/KarenLew.jpeg'),
                          ),
                          SizedBox(width: 10),
                          Text('Karen Lew')
                        ],
                      ),
                      SizedBox(height: 10),
                      Text(
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
