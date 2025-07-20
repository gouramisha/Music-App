import tkinter as tk
from tkinter import filedialog
from pygame import mixer

# Initialize Pygame Mixer
mixer.init()

# Functions
def load_file():
    global filename
    filename = filedialog.askopenfilename(filetypes=[("MP3 Files", "*.mp3")])
    if filename:
        song_label.config(text=f"Loaded: {filename.split('/')[-1]}")
        mixer.music.load(filename)

def play_music():
    if filename:
        mixer.music.play()
        status_label.config(text="Status: Playing")

def pause_music():
    mixer.music.pause()
    status_label.config(text="Status: Paused")

def resume_music():
    mixer.music.unpause()
    status_label.config(text="Status: Resumed")

def stop_music():
    mixer.music.stop()
    status_label.config(text="Status: Stopped")

# GUI Setup
root = tk.Tk()
root.title("🎵 Simple Music Player")
root.geometry("400x250")
root.config(bg="#f5f5f5")

song_label = tk.Label(root, text="No song loaded", bg="#f5f5f5", font=("Arial", 12))
song_label.pack(pady=10)

load_btn = tk.Button(root, text="Load Song", command=load_file, width=15)
load_btn.pack(pady=5)

play_btn = tk.Button(root, text="Play", command=play_music, width=15, bg="#4CAF50", fg="white")
play_btn.pack(pady=5)

pause_btn = tk.Button(root, text="Pause", command=pause_music, width=15)
pause_btn.pack(pady=5)

resume_btn = tk.Button(root, text="Resume", command=resume_music, width=15)
resume_btn.pack(pady=5)

stop_btn = tk.Button(root, text="Stop", command=stop_music, width=15, bg="#f44336", fg="white")
stop_btn.pack(pady=5)

status_label = tk.Label(root, text="Status: Idle", bg="#f5f5f5", font=("Arial", 10))
status_label.pack(pady=10)

root.mainloop()
