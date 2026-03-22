//going to be used to control the entire flow of the quiz.
//Decides what screen is shown -  intro, questions, denied, granted
//Tracks current questions and answers
//Handles the validation for pass/fail


'use client';

import { useState } from 'react';
import { questions } from './questions';
import { ScreenState } from './types';

