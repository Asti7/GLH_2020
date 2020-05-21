import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';

import 'forum_comment.dart';

class ForumsPage extends StatelessWidget {
  static const String id = 'forums_page';
  @override
  Widget build(BuildContext context) {
    var delayAmount = 500;
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          color: color7,
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                'Forums',
                style: TextStyle(color: color8, fontSize: 30),
              ),
              SizedBox(
                height: 50,
              ),
              ShowUp(
                child: Text(
                  'Post a question on the forums...',
                  style: TextStyle(color: color8, fontSize: 21),
                ),
                delay: delayAmount * 2,
              ),
              SizedBox(
                height: 50,
              ),
              Card(
                elevation: 3,
                color: color7,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(28.0),
                  child: Column(
                    children: <Widget>[
                      Text('Post'),
                      TextField(
                        cursorColor: Colors.black,
                        decoration: InputDecoration(
                          focusedBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.grey)
                              //  when the TextFormField in unfocused
                              ),
                          prefixIcon: Icon(
                            Icons.edit,
                            color: Colors.black,
                          ),
                          hintText: 'Post',
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              SizedBox(
                height: 50,
              ),
              ShowUp(
                delay: delayAmount * 3,
                child: Column(
                  children: <Widget>[
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundImage:
                                        AssetImage('images/anmol.jpeg'),
                                  ),
                                  SizedBox(width: 10),
                                  Text('Anmol Sarraf')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'I have been terminated from my job without any warning for no apparent reason. Can my employer do this?'),
                              SizedBox(height: 5),
                              MaterialButton(
                                onPressed: () {
                                  Navigator.pushNamed(context, ForumComment.id);
                                },
                                child: Card(
                                  color: color9,
                                  elevation: 5,
                                  child: Padding(
                                    padding: const EdgeInsets.all(4.0),
                                    child: Text('Comment'),
                                  ),
                                  shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(20)),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('John Appleseed')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('John Appleseed')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('John Appleseed')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('John Appleseed')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Card(
                      elevation: 5,
                      color: color7,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          // height: 50,
                          width: MediaQuery.of(context).size.width * 0.8,
                          child: Column(
                            children: <Widget>[
                              Row(
                                children: <Widget>[
                                  CircleAvatar(
                                    backgroundColor: Colors.amber,
                                  ),
                                  SizedBox(width: 10),
                                  Text('John Appleseed')
                                ],
                              ),
                              SizedBox(height: 10),
                              Text(
                                  'My employer fired me without giving me any advanced notice ?'),
                              SizedBox(height: 5),
                              Card(
                                color: color9,
                                elevation: 5,
                                child: Padding(
                                  padding: const EdgeInsets.all(4.0),
                                  child: Text('Comment'),
                                ),
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
