﻿$explorerAdvancedKey = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced'
Set-ItemProperty $explorerAdvancedKey HideFileExt 0
Set-ItemProperty $explorerAdvancedKey ShowSuperHidden 1
Set-ItemProperty $explorerAdvancedKey Hidden 1
Set-ItemProperty $explorerAdvancedKey TaskbarGlomLevel 2
Set-ItemProperty $explorerAdvancedKey PersistBrowsers 1

$osPath = "$env:mold/home/windows/path"

scoop bucket add extras
scoop bucket add jetbrains
scoop bucket add nerd-fonts

scoop install main/gsudo

scoop install main/dotnet-sdk
scoop install extras/anydesk
scoop install extras/fork
scoop install extras/synctrayzor
scoop install extras/vscode-insiders-portable
scoop install jetbrains/rider-portable

# git clone https://github.com/fc1943s/rss.git $env:userprofile/home/fs/repos/rss


# echo "source $env:userprofile/idea.vim" > $env:userprofile/.ideavimrc
# echo "source $env:userprofile/sh.vim" > $env:userprofile/.vimrc

# echo "let env=""idea""`r`n`r`nsource $env:mold/vimfiles/core.vim" > $env:userprofile/idea.vim
# echo "let env=""sh""`r`n`r`nsource $env:mold/vimfiles/core.vim" > $env:userprofile/sh.vim

$moldWindowsRoot = "$env:mold/src/windows"

sudo "$moldWindowsRoot/install-sudo.ps1"

echo fsharp starting...
dotnet fsi $moldWindowsRoot/install.fsx

Read-Host -Prompt "Script finished. Restart manually if needed. Press any key to close"

