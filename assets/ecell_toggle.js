document.getElementById('ecell_toggle').style.display="none";
document.getElementById('ecell_toggle1').style.display="none";
document.getElementById('ecell_toggle2').style.display="none";
function toggle_ecell()
{
  if(document.getElementById('ecell_toggle').style.display=="none")
  {
    document.getElementById('ecell_toggle').style.display="block";
  }
  else if(document.getElementById('ecell_toggle').style.display=="block")
  {
    document.getElementById('ecell_toggle').style.display="none";
  }
  else
  {
    document.getElementById('ecell_toggle').style.display="none";
  }

  //

  if(document.getElementById('ecell_toggle1').style.display=="none")
  {
    document.getElementById('ecell_toggle1').style.display="block";
  }
  else if(document.getElementById('ecell_toggle1').style.display=="block")
  {
    document.getElementById('ecell_toggle1').style.display="none";
  }
  else
  {
    document.getElementById('ecell_toggle1').style.display="none";
  }

  //

  if(document.getElementById('ecell_toggle2').style.display=="none")
  {
    document.getElementById('ecell_toggle2').style.display="block";
  }
  else if(document.getElementById('ecell_toggle2').style.display=="block")
  {
    document.getElementById('ecell_toggle2').style.display="none";
  }
  else
  {
    document.getElementById('ecell_toggle2').style.display="none";
  }
}
