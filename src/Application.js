import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass({
    GTypeName: 'FbrApplication'
}, class extends Gtk.Application {
    vfunc_activate() {
        const window = new Gtk.ApplicationWindow({ application: this });
        const image = new Gtk.Image({
            iconName: 'system-file-manager-symbolic',
            iconSize: Gtk.IconSize.LARGE
        });
        const label = new Gtk.Label({
            label: 'Welcome to our new file browser!',
            wrap: true
        });
        const button = new Gtk.Button({
            label: 'Let\'s go!',
            halign: Gtk.Align.CENTER
        });
        const box = new Gtk.Box({
            orientation: Gtk.Orientation.VERTICAL,
            marginTop: 36,
            marginBottom: 36,
            marginStart: 36,
            marginEnd: 36,
            valign: Gtk.Align.CENTER,
            spacing: 18
        });
        
        box.append(button);
        
        box.append(image);
        window.child = box;
        window.present();
    }
    
});
