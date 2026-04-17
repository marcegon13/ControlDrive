.class public final synthetic Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lkotlin/jvm/functions/Function0;


# instance fields
.field public final synthetic f$0:Lexpo/modules/speech/SpeechModule;


# direct methods
.method public synthetic constructor <init>(Lexpo/modules/speech/SpeechModule;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda0;->f$0:Lexpo/modules/speech/SpeechModule;

    return-void
.end method


# virtual methods
.method public final invoke()Ljava/lang/Object;
    .locals 1

    .line 0
    iget-object v0, p0, Lexpo/modules/speech/SpeechModule$$ExternalSyntheticLambda0;->f$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {v0}, Lexpo/modules/speech/SpeechModule;->$r8$lambda$PFEU6wRHEJLdhnoULY_yfxPBsFg(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;

    move-result-object v0

    return-object v0
.end method
