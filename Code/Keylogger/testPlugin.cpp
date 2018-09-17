#include "testPlugin.h"

bool LoadPlugin()
{
    return true;
}

void UnloadPlugin()
{
}

CTSTR GetPluginName()
{
    return TEXT("Tutorial plugin");
}

CTSTR GetPluginDescription()
{
    return TEXT("This plugin is designed to help teach people how to write plugins for OBS.");
}
