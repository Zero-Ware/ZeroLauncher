#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from gi.repository import Gtk

class ourwindow(Gtk.Window):

    def __init__(self):
        Gtk.Window.__init__(self, title="ZeroLauncher")
        Gtk.Window.set_default_size(self, 400,325)
        Gtk.Window.set_position(self, Gtk.WindowPosition.CENTER)

        button1 = Gtk.Button("WORK IN PROGRESS")
        button1.connect("clicked", self.whenbutton1_clicked)

        self.add(button1)

    def whenbutton1_clicked(self, button):
      print ("WORK IN PROGRESS")

window = ourwindow()
window.connect("delete-event", Gtk.main_quit)
window.show_all()
Gtk.main()
