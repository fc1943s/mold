scoop install nonportable/dokany-np
scoop install scoopet/vmware-workstation-pro

if(!$(gcm choco)) {
   [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
   iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
}


C:/ProgramData/chocolatey/bin/choco.exe install dotnet-6.0-sdk -y --pre
C:/ProgramData/chocolatey/bin/choco.exe install dotnet-5.0-sdk -y --pre
